import styles from "@/styles/contact.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
      <section id="contact" className={styles.contactSection}>
        <form className={styles.contactForm}>
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
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <input type="email" id="email" name="email" placeholder="Email" required />
            <textarea id="message" name="message" rows={5} placeholder="Message" required></textarea>
            <button type="submit">Send</button>
        </form>
      </section>
    );
}