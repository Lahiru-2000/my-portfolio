// import Image from "next/image";

import AboutHome from "./components/AboutHome";
import Footer from "./components/Footer";
// import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import ScrollButton from './components/ScrollButton'

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutHome/>
      <Footer/>
      <ScrollButton/>
    </div>
  );
}
