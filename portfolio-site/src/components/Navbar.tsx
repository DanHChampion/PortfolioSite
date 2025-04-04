"use client";

import React from 'react';
import styles from './navbar.module.scss';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const setNav = (set:boolean) :void => {
        setIsNavOpen(set);
    };

    return (
        <nav className={styles.navBar}>
            <Link href="/" className={styles.logo}>Dan Champion</Link>
            <div className={styles.hamburger} onClick={()=>setNav(!isNavOpen)}>
                <Image
                    src="/images/menu_icon.png"
                    alt="Menu"
                    width={17}
                    height={17}>
                </Image>
            </div>
            <div className={`${styles.navLinks} ${isNavOpen ? styles.active : ''}`}>
                <Link href="#about" className={styles.navLink} onClick={()=>setNav(false)}>About</Link>
                <Link href="#projects" className={styles.navLink} onClick={()=>setNav(false)}>Projects</Link>
                <Link href="#contact" className={styles.navLink} onClick={()=>setNav(false)}>Contact</Link>
            </div>
        </nav>
    );
};


export default Navbar;