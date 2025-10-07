"use client";

import { AboutMe } from "../../components/aboutme";
import { Experience } from "../../components/experience";
import { Header } from "../../components/header";
import { Hero } from "../../components/hero";


export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutMe />
      <Experience />
    </main>
  );
}
