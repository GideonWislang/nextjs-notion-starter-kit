import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.svg' />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>
            <Main />

            <NextScript />
          </body>
        </Html>
    )
  }
}
