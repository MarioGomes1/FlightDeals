import React, { Fragment } from "react";
import styles from "./Hero.module.css";
import mainImg from "../../assets/main.jpg";

function Hero() {
  return (
    <Fragment>
      <section className={styles.banner}>
        <img src={mainImg} alt="" className={styles.bg} />
      </section>
      <section className={styles.title}>Hello World!</section>
    </Fragment>
  );
}

export default Hero;
