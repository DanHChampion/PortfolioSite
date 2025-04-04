import Image from "next/image";
import styles from "@/styles/hero.module.scss";
import Link from "next/link";

export default function Hero() {
    return (
      <section id="hero" className={styles.heroSection}>
        <div className={styles.left}>
          <h1>Hi, I'm <br/> Dan Champion</h1>
          <h2>A Full-Stack Developer</h2>
          <div className={styles.buttonsContainer}>
            <a
                href="/files/Dan_H_Champion_CV_2025.pdf"
                className={styles.button}
                target="_blank"
                rel="noopener noreferrer"
                download
            >Download CV</a>
            <Link href="#projects" className={styles.viewProjects}>View Projects</Link>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/images/test.png"
            alt="Dan Champion"
            width={500}
            height={500}
            className={styles.heroImage}
          />
        </div>
      </section>
    );
}