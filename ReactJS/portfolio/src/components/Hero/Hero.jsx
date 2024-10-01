
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Amna</h1>
        <p className={styles.description}>
        A final year Computer Science student at FAST with a passion for coding and problem-solving.  
        Reach out if you would like to learn more!
        </p>
        <a href="mailto:i210665@nu.edu.pk" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/amna.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};