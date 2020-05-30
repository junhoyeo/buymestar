import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Normalize } from 'styled-normalize';

import '../styles/global.scss';

type AppProps = {
  Component: React.ReactNode,
  pageProps: any;
};

export default class CustomApp extends App<AppProps> {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Buy me star</title>
          <meta name="description" content="Coffee" />
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Muli:wght@400;700;900&display=swap" />
          <link rel="stylesheet" type="text/css" href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css" />
          <script src="https://kit.fontawesome.com/a42f454688.js" crossOrigin="anonymous"></script>
        </Head>
        <>
          <Normalize />
          <Component {...pageProps} />
        </>
      </>
    );
  }
}
