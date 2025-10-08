"use client";

import { AboutMe } from "../../components/aboutme";
import { Education } from "../../components/education";
import { Experience } from "../../components/experience";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";
import { SampleWorks } from "../../components/sampleworks";


export default function Home() {
  return (
    
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Education />
      <Experience />
      <SampleWorks />
    </main>
  );
}
