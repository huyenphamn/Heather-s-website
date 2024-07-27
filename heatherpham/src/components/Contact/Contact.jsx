import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../util";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/email.png")} alt="Email Icon" />
          <a href="mailto:phamngochuyen1911@gmail.com">phamngochuyen1911@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedin.png")}
            alt="LinkedIn Icon"
          />
          <a href="https://www.linkedin.com/in/huyen-n-pham/">linkedin.com/huyen-n-pham</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/github.png")} alt="Github Icon" />
          <a href="https://github.com/huyenphamn">github.com/huyenphamn</a>
        </li>
      </ul>
    </footer>
  );
};