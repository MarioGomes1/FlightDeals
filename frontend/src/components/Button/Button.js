import React from "react";
import styles from "../Button/Button.module.css";

//refactor style
const Button = (props) => {
  console.log(props);
  return (
    <button onClick={props.click} className={styles.btn}>
      {props.children}
    </button>
  );
};

export default Button;
