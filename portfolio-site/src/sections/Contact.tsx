"use client";

import styles from "@/styles/contact.module.scss";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Contact() {
    const [message, setMessage] = React.useState<string>("");
    const [name, setName] = React.useState<string>("");
    const [email, setEmail] = React.useState<string>("");
    const [emailContent, setEmailContent] = React.useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage("Sending...");
        
        const body = {
            name,
            email,
            message: emailContent,
        };

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        if (response.ok) {
            setMessage("Message sent!");
          } else {
            console.error(response.statusText);
            setMessage("Something went wrong...");
          }
    }

    return (
      <section id="contact" className={styles.contactSection}>
        <form className={styles.contactForm} onSubmit={(e) => {handleSubmit(e)}}>
        <h1>Contact</h1>
        <div className={styles.socials}>
            <Link 
                href={"https://github.com/DanHChampion"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.gitHub}>
                <Image
                    src={"/images/github_icon.png"}
                    alt={"GitHub"}
                    width={40}
                    height={40}
                    className={styles.icon}
                ></Image>
            </Link>
            <Link
                href={"https://linkedin.com/in/danchampion"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedIn}>
                <Image
                    src={"/images/linkedin_icon.png"}
                    alt={"LinkedIn"}
                    width={40}
                    height={40}
                    className={styles.icon}
                ></Image>
            </Link>
            <Link
                href={"mailto:champion.hdan@gmail.com"}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.EMAIL}>
                <Image
                    src={"/images/email_icon.png"}
                    alt={"Email"}
                    width={40}
                    height={40}
                    className={styles.icon}
                ></Image>
            </Link>
        </div>
            <p>Got any questions? Fill out this form to get in touch.</p>
            <input 
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={message? true: false}
                required />
            <input 
                type="email"
                id="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                disabled={message? true: false}
                />
            <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Message"
                value={emailContent}
                onChange={(e) => setEmailContent(e.target.value)}
                disabled={message? true: false}
                required
            />
            <button type="submit"
                disabled={message? true: false}
                className={`${styles["submit-button"]}}
                ${message === "Message sent!" ? styles["success"] : ""}
                ${message === "Something went wrong..." ? styles["error"] : ""}
                `}>
                {message? message: "Send"}
            </button>
        </form>
      </section>
    );
}