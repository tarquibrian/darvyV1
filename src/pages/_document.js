// import { Html, Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheet } from 'styled-components'

// export default function Document() {

//   return (
//     <Html lang="en">
//       <Head title="Brian Tarqui Rojas | Web Developer">
//           <meta
//             name="description"
//             content="Brian Tarqui Rojas | Web Developer | System Engineer"
//           />

//           <meta property="og:url" content="https://www.tarquibrian.com/" />
//           <meta property="og:type" content="website" />
//           <meta
//             property="og:title"
//             content="Brian Tarqui Rojas | Web Developer"
//           />
//           <meta
//             property="og:description"
//             content="Brian Tarqui Rojas | Web Developer"
//           />
//           <meta property="og:image" content="https://tarquibrian.com/og.png" />

//           <meta name="twitter:card" content="summary_large_image" />
//           <meta property="twitter:domain" content="tarquibrian.com" />
//           <meta property="twitter:url" content="https://www.tarquibrian.com/" />
//           <meta
//             name="twitter:title"
//             content="Brian Tarqui Rojas | Web Developer"
//           />
//           <meta
//             name="twitter:description"
//             content="Brian Tarqui Rojas | Web Developer"
//           />
//           <meta
//             name="twitter:image"
//             content="https://tarquibrian.com/og.png"
//           ></meta>
//         </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head title="Darvy Portfolio">
          <meta name="title" content="Darvy Portfolio"></meta>
          <meta
            name="description"
            content="Hi🤘, My name is Brian but they usually call me by my last name (Tarqui), I am a person who is very passionate about the world of technology and I recently obtained my degree in Systems Engineering."
          />

          <meta property="og:url" content="https://www.tarquibrian.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Darvy Portfolio" />
          <meta
            property="og:description"
            content="Hi🤘, My name is Brian but they usually call me by my last name (Tarqui), I am a person who is very passionate about the world of technology and I recently obtained my degree in Systems Engineering."
          />
          <meta property="og:image" content="https://tarquibrian.com/og.png" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="tarquibrian.com" />
          <meta property="twitter:url" content="https://www.tarquibrian.com/" />
          <meta name="twitter:title" content="Darvy Portfolio" />
          <meta name="twitter:description" content="Darvy Portfolio" />
          <meta
            name="twitter:image"
            content="https://tarquibrian.com/og.png"
          ></meta>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  // static async getInitialProps(ctx) {
  //   const sheet = new ServerStyleSheet();
  //   const originalRenderPage = ctx.renderPage;

  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App) => (props) =>
  //           sheet.collectStyles(<App {...props} />),
  //       });

  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }
}
