import React from "react";
import styles from "./Header.module.css";

//TODO: change the file name to match component
function Navigation() {
  return (
    <React.Fragment>
      <section className={styles.header}>
        <a href="/" className={styles.logo}>
          <h2 className={styles.logo}>Today</h2>
        </a>
        <div className={styles.toggle}>
          <ion-icon
            className={styles.burger}
            name="reorder-three-outline"
            size="large"
          ></ion-icon>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Navigation;
