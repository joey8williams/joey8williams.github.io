// pages/_app.js
import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'

export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Joe Williams</title>
          <link rel='shortcut icon' href='/static/favicon.ico' />
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
