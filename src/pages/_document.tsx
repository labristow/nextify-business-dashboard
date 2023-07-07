import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700;800&display=swap"
        rel="stylesheet"
      ></link>
      <link rel="shortcut icon" href="favicon.svg" type="image/x-icon" />
      <title>Nextify Shop - Build and deploy sales website faster</title>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
