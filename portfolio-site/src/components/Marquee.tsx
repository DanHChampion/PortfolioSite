import React from "react";
import styles from "./marquee.module.scss";

const Marquee: React.FC = () => {
    return (
        <div className={styles.marqueeText}>
            <div className={styles.marqueeTextTrack}>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>CSS</p>
                <p>Accessibility</p>
                <p>React</p>
                <p>Angular</p>
                <p aria-hidden="true">JavaScript</p>
                <p aria-hidden="true">TypeScript</p>
                <p aria-hidden="true">CSS</p>
                <p aria-hidden="true">Accessibility</p>
                <p aria-hidden="true">React</p>
                <p aria-hidden="true">Angular</p>
                <p aria-hidden="true">JavaScript</p>
                <p aria-hidden="true">TypeScript</p>
                <p aria-hidden="true">CSS</p>
                <p aria-hidden="true">Accessibility</p>
                <p aria-hidden="true">React</p>
                <p aria-hidden="true">Angular</p>
                <p aria-hidden="true">JavaScript</p>
                <p aria-hidden="true">TypeScript</p>
                <p aria-hidden="true">CSS</p>
                <p aria-hidden="true">Accessibility</p>
                <p aria-hidden="true">React</p>
                <p aria-hidden="true">Angular</p>
            </div>
        </div>
    );
};

export default Marquee;