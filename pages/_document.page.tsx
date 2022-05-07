/* eslint-disable @typescript-eslint/no-explicit-any */
import Document, { Head, Html, Main, NextScript } from 'next/document'

type Props = {}

class _Document extends Document<Props> {
  render(): React.ReactElement {
    return (
      <Html lang="ja">
        <Head>
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            crossOrigin="true"
            href="https://fonts.gstatic.com"
            rel="preconnect"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500;700&family=Montserrat:wght@600;700&display=swap"
            rel="stylesheet"
          />
          {/* <link href={staticPath.favicon_ico} rel="icon" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _Document
