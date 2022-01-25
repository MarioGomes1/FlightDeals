import React from "react";
import a from "../../images/Colorado.jpg";
import b from "../../images/CaboVerde.jpg";
import c from "../../images/France.jpg";
import styles from "./Card.module.css";

//refactor to make it dynamic
function Card() {
  return (
    <>
      <section className={styles.destination}>
        <div className={styles.list}>
          <div className={styles.box}>
            <div className={styles.imgBx}>
              <img className={styles.img1} src={a} alt="" />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.imgBx}>
              <img className={styles.img1} src={b} alt="" />
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.imgBx}>
              <img className={styles.img1} src={c} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;
