import {Header} from '../components/Header';
import Head from 'next/head';
import {homeStyles} from '../styles/HomeCss';

export default function Home() {
  homeStyles();
  return (
    <>
      <Head>
        <title>Jhonatas Paulo | Desenvolvedor Web </title>
      </Head>
      <Header />
    </>
  );
}
