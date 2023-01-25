import { useAllPrismicDocumentsByIDs } from '@prismicio/react';
import { useFirstPrismicDocument, usePrismicDocumentByUID } from '@prismicio/react/dist/clientHooks';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
    return (
        <>
        <Head>
            <title>Posts | Ignews</title>
        </Head>

        <main className={styles.container}>
           <div className={styles.posts}>
                <a href='#'>
                    <time>12 de março de 2022</time>
                    <strong>Dark Mode com CSS — mudando a aparência do Blog de maneira simples e rápida</strong>
                    <p>Umas das funcionalidades que está na moda em Blogs e Sites é o Dark Mode. Devs, em sua maioria, curtem bastante utilizar temas escuros, tanto na IDE quanto em outros apps.</p>
                </a>
                <a href='#'>
                    <time>3 de Nov de 2020</time>
                    <strong>Next.JS - Novidades na versão 10 e atualização do blog para melhorar a performance</strong>
                    <p>Se você nos acompanhou nos últimos posts, já viu que criamos um blog com um contador de visitas usando o MongoDB e Next.js, depois adicionamos a funcionalidade de dark mode.</p>
                </a>
            </div>
        </main>
        </>
    );
}