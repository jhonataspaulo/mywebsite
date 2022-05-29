import React from 'react';
import NextDocument, {Html, Head, Main, NextScript} from 'next/document';
import {getCssText} from '../stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{__html: getCssText()}}
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="Faça seu site hoje mesmo, com as melhores tecnologias dos mercado, sistemas de controle para sua loja, aplicativos para seu trabaho, e muito mais..."
          />
          <meta name="keywords" content="site, desenvolvimento, jhonatas" />
          <meta name="author" content="Jhonatas Paulo" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@JhonatasPaulo" />
          <meta
            name="twitter:title"
            content="Jhonatas Paulo | Fullstack Development"
          />
          <meta
            name="twitter:description"
            content="UI Designer and Fullstack Development"
          />
          <meta
            name="twitter:image"
            content="https://i.pinimg.com/originals/64/42/0b/64420b6687531dcde9499f0332b1c7a2.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
