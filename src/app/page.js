"use client";

import { AboutMe } from "../../components/aboutme";
import { Education } from "../../components/education";
import { Experience } from "../../components/experience";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { SampleWorks } from "../../components/sampleworks";
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
      <Toolset />
    </main>
  );
}
