import {Header} from '../components/Header';
import Head from 'next/head';
import {homeStyles} from '../styles/HomeCss';
import {About} from '../components/About';
import {Skills} from '../components/Skills';
import {Footer} from '../components/Footer';
import {useEffect} from 'react';

export default function Home() {
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
      <Footer />
    </>
  );
}
