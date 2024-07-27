import React from "react"
import { getImageUrl } from "../../util";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (<section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Heather</h1>
            <p className={styles.desc}>
                I'm a student at Mount Holyoke College majoring in Computer Science and Mathematics. Welcome to my journey! Feel free to reach out to me!
            </p>
            <a href="mailto:phamngochuyen1911@gmail.com" className={styles.contactBtn}>Contact me!</a>
        </div>
        <img src={getImageUrl("avt/avatar.png")} alt="My avatar" className={styles.avtImg}/>
        <div className={styles.topBlur}/>
    </section>);
};