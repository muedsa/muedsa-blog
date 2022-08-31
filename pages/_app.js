import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import {DefaultSeo} from 'next-seo';

import '../styles/main.css'
import SEO_CONFIG from '../next-seo.config';


export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO_CONFIG}/>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
