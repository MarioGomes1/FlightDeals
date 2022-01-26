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
    // props.onClick(inputState);

    console.log(inputState);
  };

  const test = () => {};
  useEffect(() => {
    console.log(inputState);
  }, [inputState]);

  return (
    <>
      <div className={styles.container}>
        <input
          onChange={inputValueHandler}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={inputState[props.name]}
          // onChange={test}
        />
      </div>
      {/* <button onClick={test}>click me</button> */}
    </>
  );
}

export default InputBuilder;
