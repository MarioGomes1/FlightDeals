import React from "react";

import styles from "./InputBuilder.module.css";
function InputBuilder(props) {
  const inputValueHandler = (e) => {
    // props.inputHandler()
    console.log(e.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        onChange={inputValueHandler}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
      />
    </div>
  );
}

export default InputBuilder;
