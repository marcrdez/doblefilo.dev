import Head from "next/head";
import React from "react";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { NavBar } from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Doblefilo</title>
        <meta name="description" content="Marc Rodriguez personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
        <Main />
        <Footer />
      </main>
    </div>
  );
}
