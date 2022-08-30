import { Html, Head, Main, NextScript } from 'next/document'
import { SITE_NAME, SITE_URL } from '../theme.config';

export default function Document() {
  const meta = {
    title: SITE_NAME,
    description: 'MUEDSA blog. XD',
    image: 'https://avatars.githubusercontent.com/u/7676275?v=4?s=400',
    site: SITE_URL
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={meta.site} />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
