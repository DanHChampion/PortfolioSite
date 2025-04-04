import Navbar from "@/components/Navbar";
import styles from "./page.module.scss";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
