import {Header} from '../components/Header';
import {About} from '../components/About';
import {Skills} from '../components/skills';
import {Contact} from '../components/Contact';
import {Footer} from '../components/Footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Jhonatas Paulo | Desenvolvedor Web </title>
      </Head>
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
