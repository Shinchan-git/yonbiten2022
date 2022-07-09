import Head from 'next/head'
import React from 'react'

const Seo: React.FC = () => {
  return (
    <Head>
      <title>四美展2022</title>
      <html lang="ja" />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <meta name="description" content="四美展2022のホームページです。" />
      <meta property="og:url" content="https://yonbiten2022.pages.dev" />
      <meta property="og:title" content="四美展2022" />
      <meta property="og:description" content="四美展2022のホームページです。" />
      <meta property="og:image" content="https://yonbiten2022.pages.dev/ogimage.png" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="四美展2022" />
      <meta name="twitter:image" content="https://yonbiten2022.pages.dev/ogimage.png" />
      <meta name="theme-color" content="#fff" />

    </Head>
  )
}

export default Seo