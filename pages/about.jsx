const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h3>Linux Lover</h3>
      <h3>Node.js Developer</h3>
      <h3>Python Lover</h3>
      <h3>Unity3D game programmer</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
