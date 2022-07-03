import {Header} from '../components/Header';
import {About} from '../components/About';
import {Skills} from '../components/skills';
import {Contact} from '../components/Contact';
import {Footer} from '../components/Footer';
import Head from 'next/head';
import {homeStyles} from '../styles/HomeCss';
import {useEffect} from 'react';
import {Instagram} from '../components/Instagram';
import {GetStaticProps} from 'next';
import axios from 'axios';

type Response = {
  data: {
    data: FeedItem[];
  };
};

type FeedItem = {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
};

export default function Home({data}: Response) {
  homeStyles();
  function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', reveal);
  }, []);

  return (
    <>
      <Head>
        <title>Jhonatas Paulo | Desenvolvedor Web </title>
      </Head>
      <Header />
      <About />
      <Skills />
      <Instagram data={data.data} />
      <Contact />
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const count = 10;
  const fields = 'media_url,media_type,permalink';
  const URL = `https://graph.instagram.com/me/media?access_token=${process.env.INSTAGRAM_TOKEN}&fields=${fields}&limit=${count}`;

  const {data} = await axios.get(URL);

  console.log(data);

  return {
    props: {
      data
    },
    revalidate: 1 * 60 * 60 * 24 // One day
  };
};
