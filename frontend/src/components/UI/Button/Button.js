import React from "react";
import styles from "./Button.module.css";

//refactor style
//TODO add an onclick event
const Button = (props) => {
  console.log(props);
  return (
    <button
      className={`${styles.btn} ${props.className}`}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
