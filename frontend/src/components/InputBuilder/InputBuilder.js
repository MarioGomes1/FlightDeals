//this component should not be making api requests. Will need to refactor......again!
import React, { useState, useEffect, useContext } from "react";
import { inputLocationCTX } from "../../Context/locationListContext";

import styles from "./InputBuilder.module.css";
import { instance } from "../API/api";

//TODO basic input
//API request should not be made here
function InputBuilder(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const { setLocationList, setSearchFlightObj } = useContext(inputLocationCTX);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFlightObj((prev) => ({
      ...prev,
      [name]: value,
    }));
    //*sets the searchTerm state as the user's enter value which triggers the useEffect's API call. Might need to move to its own component though
    setSearchTerm(value);
  };

  //*Only invokes getLocation() if user stops typing after .5 seconds (debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      searchTerm && getLocation();
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  //sends api request and a list of airports that matches the user's "searchTerm" input is returned
  async function getLocation() {
    let config = {
      params: {
        term: searchTerm,
      },
    };
    try {
      const { data } = await instance.get("locations/query", config);
      // const SEARCH_API_ENDPOINT = `https://tequila-api.kiwi.com/v2/search?
      setLocationList({ data, type: props.name });
      //TODO handle error i.e nothing comes back
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <>
      <span className={styles.container}>
        <input
          onChange={onInputChange}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
        />
      </span>
    </>
  );
}

export default InputBuilder;
