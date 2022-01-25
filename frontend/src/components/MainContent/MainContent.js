import React from "react";
import styles from "./MainContent.module.css";
import main from "./main.jpg";
import SearchContainer from "../SearchContainer/SearchContainer";
import Card from "../Card/Card";

function MainContent() {
  return (
    <React.Fragment>
      <section className={styles.banner}>
        <img src={main} alt="" className={styles.bg} />
      </section>
      <section className={styles.title}>Hello World!</section>
      <div className={styles.test}></div>
      <SearchContainer />
      <Card />
    </React.Fragment>
  );
}

export default MainContent;
