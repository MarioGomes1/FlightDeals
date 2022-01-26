import React from "react";
import styles from "../Button/Button.module.css";

//refactor style
const Button = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default Button;
