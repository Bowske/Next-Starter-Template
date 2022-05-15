import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Bowske - portfolio</title>
        <meta name="description" content="Adam Borowski - portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button className="btn btn-active btn-accent">Button</button>
    </div>
  );
};

export default Home;
