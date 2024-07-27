import React from "react"
import { getImageUrl } from "../../util";
import styles from "./About.module.css";

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img
          src={getImageUrl("avt/avatar2.png")}
          alt="Me happy"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("avt/student.png")} alt="Student icon"  className={styles.studentImg}/>
            <div className={styles.aboutItemText}>
            <h3>MHC 26'</h3>
            <p>
            I’m a student majoring in Computer Science and Mathematics at Mount Holyoke College
            </p>
            </div>
            </li>
            <li className={styles.aboutItem}>
            <img src={getImageUrl("avt/codeGirl.png")} alt="Code icon"  className={styles.girlCodeImg}/>
            <div className={styles.aboutItemText}>
                <h3>Women in STEM</h3>
                <p>
                I’m proud to be a woman in STEM, honored by AnitaB.org GHC 24’ Scholar, and more
              </p>
            </div>
            </li>
        </ul>

        </div>

    </section>);
};
