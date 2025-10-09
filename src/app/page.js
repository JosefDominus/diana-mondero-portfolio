"use client";

import Head from "next/head";

import { AboutMe } from "../../components/aboutme";
import { Contact } from "../../components/contact";
import { Education } from "../../components/education";
import { Experience } from "../../components/experience";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { SampleWorks } from "../../components/sampleworks";
import { Skills } from "../../components/skills";
import { Toolset } from "../../components/toolset";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default function Home() {
  return (
    
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <SampleWorks />
      <Skills />
      <Toolset />
      <Contact />
      <Footer />
    </main>
  );
}
