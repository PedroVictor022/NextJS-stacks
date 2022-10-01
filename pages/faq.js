import Head from 'next/head';
import { useEffect, useState } from 'react';
import Link from '../src/components/Link';

// API LINK "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"

export async function getStaticProps() {
    // Itens passados aqui, serão enviados como props para a função principal

    const FETCH_LINK = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

    const apiLink = await fetch(FETCH_LINK)
        .then(res => res.json())
        .then(data => data);

    return {
        props: {
            apiLink
        }
    }
}

export default function FAQPage({ apiLink }) {
    const [faq, setFaq] = useState(apiLink);


    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases FAQ</title>
            </Head>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>

            <ul>
                {faq.map(({ answer, question }) => (
                    <li key={question}>
                        <article>
                            <h2>{question}</h2>
                            <p>{answer}</p>
                        </article>
                    </li>
                ))}
            </ul>

        </div>
    )
}