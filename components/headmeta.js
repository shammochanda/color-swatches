import Head from "next/head";

const HeadMeta = (props) => {
  return (
    <Head>
      <title>{props.children}</title>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <meta name="description" content={props.metacontent} />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
    </Head>
  );
};

export default HeadMeta;