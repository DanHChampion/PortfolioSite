import styles from "@/styles/projects.module.scss";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
        name: "Quaky Gifts",
        description: "A gift curation site for weird and unique gifts.",
        imageUrl: "/images/quaky_gifts.png",
        link: "https://www.quaky.gifts"
    },
    {
        name: "Portfolio Site",
        description: "A portfolio to display my projects.",
        imageUrl: "/images/portfolio_site.png",
        link: "/"
    },
    {
        name: "Blokus AI",
        description: "A showcase of multiple AI agents to master Blokus.",
        imageUrl: "/images/blokus_ai.png",
        link: "https://github.com/DanHChampion/BlockusAI"
    },
    {
      name: "Cheesecake",
      description: "My at-home video streaming platform for my media.",
      imageUrl: "/images/cheesecake_sc.png",
      link: "https://github.com/DanHChampion/Cheesecake"
  }
];

export default function Projects() {
    return (
      <section id="projects" className={styles.projectsSection}>
        <h1 className={styles.header}>Projects</h1>
        
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <div key={index} className={styles.project}>
              <div className={styles.windowBar}>
                <div className={styles.cross}>
                  <Image 
                    src="/images/close_icon.png"
                    alt="Close"
                    width={16}
                    height={16}
                  ></Image>
                </div>
                <div className={styles.resize}>
                  <Image 
                    src="/images/maximize_icon.png"
                    alt="Resize"
                    width={16}
                    height={16}
                  ></Image>
                </div>
                <div className={styles.minimize}>
                  <Image 
                    src="/images/minimize_icon.png"
                    alt="Minimize"
                    width={16}
                    height={16}
                  ></Image>
                </div>
              </div>
              <Link 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer" 
                className={styles.imageWrapper}>
                <Image 
                    src={project.imageUrl}
                    alt={project.name}
                    fill
                >
                </Image>
              </Link>
              <div className={styles.projectDetails}>
                <h1>{project.name}</h1>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}