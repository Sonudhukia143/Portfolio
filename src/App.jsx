import { useEffect, useState } from "react";
import About from "./sections/About";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

export default function App () {
  //const [hero,setHero] = useState(<h1 style={{color:'white',padding:'0px',margin:'20vh',fontSize:'5vh'}}>Loading...</h1>)

//  useEffect(() => setTimeout(() => setHero(<Hero />),500),[]);

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <WorkExperience />
      <Contact />
      <Footer />
    </main>
  )
}