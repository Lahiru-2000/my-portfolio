// import Image from "next/image";

import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import ScrollButton from './components/ScrollButton'

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutMe/>
      <ScrollButton/>
    </div>
  );
}
