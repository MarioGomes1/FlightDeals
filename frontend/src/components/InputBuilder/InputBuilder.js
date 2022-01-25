import React, { useState, useEffect } from "react";

import styles from "./InputBuilder.module.css";

function InputBuilder(props) {
  const [inputState, setInputState] = useState({
    fromDestination: "",
    toDestination: "",
    startDate: "",
    endDate: "",
  });

  const inputValueHandler = (e) => {
    const { name, value } = e.target;
    setInputState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(inputState);
  }, [inputState]);

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
