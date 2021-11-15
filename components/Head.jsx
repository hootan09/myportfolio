import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Mam Niki is a Node.js web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="niki, mam niki, web developer, niki web developer, niki developer, mern stack, niki portfolio"
      />
      <meta property="og:title" content="Mam Niki's Portfolio" />
      <meta
        property="og:description"
        content="A Node.js developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://hootan09.github.io/myportfolio/meta.png" />
      <meta property="og:url" content="https://hootan09.github.io/myportfolio" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Mam Niki',
};
