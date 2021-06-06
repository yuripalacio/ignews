import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';

interface HomePros {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomePros) {
  return (
    <>
      <Head>
            <title>Home | ig.news</title>
      </Head>
      
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Olá, bem-vindo</span>
          <h1>Notícias sobre <span>Gestão</span> e <span>Tecnologia</span>.</h1>
          <p>
            Tenha acesso a todos os conteúdos <br />
            <span>por {product.amount} ao mês</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1Ik85nAxqED0XXWohgiEbryH')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format( price.unit_amount / 100 ),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
