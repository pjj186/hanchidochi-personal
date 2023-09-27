import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className='scrollbar-hide'>
        <Head></Head>
        <body>
          <Main />
          <div id='modal-root' />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
