"use client"; 

import styles from "@/styles/about.module.scss";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function About() {
    const options = ["Summary", "Skills", "Experience"];

    const summaryHtml = `<p>I'm a <b>full-stack developer</b> with a passion for creating <i>dynamic</i> and <b>responsive web applications</b>. I have experience in both front-end and back-end development, and I'm always eager to learn <b>new technologies</b>.</p>`;

    const words = summaryHtml.split(" ");
    
    const skills = [
        { name: "JavaScript", value: 90, image: "/images/javascript.png" },
        { name: "React", value: 85, image: "/images/react.png" },
        { name: "Node.js", value: 80, image: "/images/nodejs.png" },
        { name: "CSS", value: 75, image: "/images/css.png" },
        { name: "Typescript", value: 70, image: "/images/nodejs.png" },
    ];
    const experiences = [
        { title: "Software Engineer", company: "Amadeus", year: "Aug 2023 - Present"},
        { title: "Software Engineer Intern", company: "Waters", year: "Jul 2022 - Sep 2022"},
    ];
    

    const [selected, setSelected] = useState(options[0]);
    const [typedWords, setTypedWords] = useState<string[]>([]);
    const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
    const [visibleExperiences, setVisibleExperiences] = useState<number[]>([]);

    useEffect(() => {
        setTypedWords([]);
        setAnimatedSkills(skills.map(() => 0));
        setVisibleExperiences([]);
        if (selected === "Summary") {

            words.forEach((word, index) => {
                setTimeout(() => {
                    setTypedWords((prev) => [...prev, word]);
                }, index * 30);
            });
        }
        if (selected === "Skills") {
        
        const timeout = setTimeout(() => {
            setAnimatedSkills(skills.map((skill) => skill.value)); 
        }, 100);
        return () => clearTimeout(timeout);
        }
        if (selected === "Experience") {
            experiences.forEach((_, index) => {
                setTimeout(() => {
                    setVisibleExperiences((prev) => [...prev, index]);
                }, index * 300);
            });
        }
    }, [selected]);

    return (
      <section id="about" className={styles.aboutSection}>
        <h1>About</h1>
        <div className={styles.cardsContainer}>
            <div className={styles.cardsSelector}>
                {options.map((option) => (
                    <div
                        key={option}
                        className={`${styles.option} ${selected === option ? styles.active : ""}`}
                        onClick={() => setSelected(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
            <div className={styles.cards}>
                {selected === "Summary" && (
                    <div className={`${styles.card} ${styles.summary}`}>
                        <div dangerouslySetInnerHTML={{ __html: typedWords.join(" ") }} />
                    </div>
                )}
                {selected === "Skills" && (
                    <div className={`${styles.card} ${styles.skills}`}>
                        {skills.map((skill, index) => (
                            <div key={skill.name} className={styles.skill}>
                                {/* <Image
                                    src={skill.image}
                                    alt={skill.name}
                                    width={40}
                                    height={40}
                                    className={styles.skillImage}
                                /> */}
                                <div className={styles.skillDetails}>
                                    <span className={styles.skillName}>{skill.name}</span>
                                    <div className={styles.skillBar}>
                                        <div className={styles.skillValue} style={{ "width": `${animatedSkills[index]}%` }}></div>
                                        <div className={styles.segments}></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                {selected === "Experience" && (
                    <div className={`${styles.card} ${styles.experience}`}>
                        <div className={styles.timeline}>
                            {experiences.map((exp, index) => (
                                <div
                                    key={index}
                                    className={`${styles.timelineItem} ${
                                        visibleExperiences.includes(index) ? styles.visible : ""
                                    }`}
                                >
                                    <div className={styles.timelineDot}></div>
                                    <div className={styles.timelineContent}>
                                        <p className={styles.title}>{exp.title}</p>
                                        <p className={styles.company}>{exp.company}</p>
                                        <p className={styles.year}>{exp.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
      </section>
    );
}