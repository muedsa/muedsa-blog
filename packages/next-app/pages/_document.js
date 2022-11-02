import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head>
        <script src="https://cdn.jsdelivr.net/npm/@webcomponents/webcomponentsjs@2.5.0/webcomponents-loader.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
