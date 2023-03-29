import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content="wpaskjbdn zqnakjsnde"/>
        <meta name="google-site-verification" content="QPk55aEsLIKf57cf79B3Kew8tse-65ABsja-xpDB4mQ" />
        <meta name="robots" content="follow, index" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is a webpage designed for the CSCE670 Information Storage and Retrieval course at TAMU.</p>
        <p>This page is designed for the search query: <b>wpaskjbdn zqnakjsnde</b></p>
        <Link href="/wpaskjbdn-zqnakjsnde">Go to first post</Link>
      </section>
    </Layout>
  );
}