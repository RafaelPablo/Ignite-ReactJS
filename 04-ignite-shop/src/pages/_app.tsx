import { AppProps } from "next/app";
import React from "react";
import { globalStyles } from "../styles/global";
import { Container, Header } from "../styles/pages/app";
import logoImg from '../assets/logo.svg';
import Image from 'next/image';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Header>
        <Image src={logoImg} width="400" height="400" alt="" />
      </Header>
      
      <Component {...pageProps} />
    </Container>
  )
}
