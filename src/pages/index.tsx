import type { NextPage } from "next";
import Head from "next/head";
import Home from "../components/Home/Home";
import Footer from "../components/Footer/Footer";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Typescript Nextjs Boilerplate</title>
        <meta name="description" content="Created by Anson Yu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />

      <Footer />
    </div>
  );
};

export default Index;
