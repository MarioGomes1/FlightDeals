import React, { useState, useEffect, useContext } from "react";
import { locations } from "../../Context/locationListContext";
import axios from "axios";

import styles from "./InputBuilder.module.css";
import { instance } from "../API/api";

function InputBuilder(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputState, setInputState] = useState({
    fromDestination: "",
    toDestination: "",
    startDate: "",
    endDate: "",
  });
  const { setLocationList, setSearchFlightObj } = useContext(locations);
  //sets the searchTerm state as the user's enter value which triggers the useEffect
  //TODO explain what this is doing
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSearchFlightObj((prev) => ({
      ...prev,
      [name]: value,
    }));
    setSearchTerm(value);
    setInputState({
      ...inputState,
      [name]: value,
    });
  };

  //Only invokes getLocation() if user stops typing after .5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      searchTerm && getLocation();
      // console.log("useEffect");
      locationTransfer();
    }, 500);

    return () => {
      // console.log("Clean up");
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const locationTransfer = () => {
    // locationList && props.onLocation(locationList);
  };
  //sends api request and a list of airports that matches the user's input is returned
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
    } catch {
      console.log("idk");
    }
  }

  return (
    <>
      <div className={styles.container}>
        <input
          onChange={onInputChange}
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          value={inputState[props.name]}
          // onChange={locationTransfer}
        />
      </div>
    </>
  );
}

export default InputBuilder;
