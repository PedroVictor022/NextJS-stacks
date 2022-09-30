import { useEffect } from 'react';
import Link from '../src/components/Link';

export default function FAQPage() {
    useEffect(() => {
        const FAQ_API = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
        
        fetch(FAQ_API)
            .then((res) => {
                return res.json()
            })
            .then(data => console.log(data))

    }, [])

    return (
        <div>
            <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
            <Link href="/">
                Ir para a home
            </Link>
        </div>
    )
}