import React from "react";
import styles from "./Button.module.css";

//refactor style
//TODO add an onclick event
const Button = (props) => {
  return <button className={styles.btn}>{props.children}</button>;
};

export default Button;
