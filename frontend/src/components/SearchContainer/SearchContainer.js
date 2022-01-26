//most of this logic should be handled by a searchInput component and then render the amount of inputs requsted in the container

import React, { useState, useEffect, useCallback } from "react";
import styles from "./SearchContainer.module.css";

import Button from "../Button/Button";
import LocationList from "../LocationList/LocationList";
import InputBuilder from "../InputBuilder/InputBuilder";
// import api from "../API";

import { Link } from "react-router-dom";

function SearchContainer(props) {
  //refactor [{}]
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [airportToCode, setAirportToCode] = useState("");
  const [airportFromCode, setAirportFromCode] = useState("");
  const [suggestedFromLocations, setSuggestedFromLocations] = useState([]);
  const [suggestedToLocations, setSuggestedToLocations] = useState([]);
  const [tempLocation, setTempLocation] = useState("");
  // const [inputState, setInputState] = useState([]);

  const axios = require("axios"); // should I have this outside the component? change it to import

  const locationHandler = (e) => {
    e.preventDefault();
    const inputName = e.target.name;
    setTempLocation(inputName);
    const inputValue = e.target.value;

    switch (inputName) {
      case "from":
        setFromLocation(inputValue);
        break;
      case "to":
        setToLocation(inputValue);
        break;
      case "startDate":
        setStartDate(inputValue);
        break;
      case "endDate":
        setEndDate(inputValue);
        break;
      default:
        console.log("Place Holder");
    }
  };

  // useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     getLocation();
  //   }, 500);
  //   return () => {
  //     console.log("clean");
  //     clearTimeout(timeOut);
  //   };
  // }, [fromLocation, toLocation]);

  // async function getLocation() {
  //   const apiKey = "1a3uomecE8h0iKQPFWck8DLgECSyWc3X"; //DELETE MEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE
  //   //test date DELETE ME AND USE STATE
  //   const searchTerm = tempLocation == "to" ? toLocation : fromLocation;
  //   const config = {
  //     headers: {
  //       accept: "application/json",
  //       apikey: "1a3uomecE8h0iKQPFWck8DLgECSyWc3X",
  //     },
  //   };
  //   //BUGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG if there's no from, the request is still being processed....fix this
  //   const LOCATION_API_ENDPOINT = `https://tequila-api.kiwi.com/locations/query?term=${searchTerm}&locale=en-US&location_types=airport&limit=10&active_only=true`;
  //   // const SEARCH_API_ENDPOINT = `https://tequila-api.kiwi.com/v2/search?fly_from=${flyFrom}&fly_to=${flyTo}&dateFrom=${dateFrom}&dateTo=${dateTo}`;

  //   // //Make request to get user's requsted city/airport code
  //   try {
  //     const { data } = await axios.get(LOCATION_API_ENDPOINT, config);
  //     // console.log(tempLocation);
  //     if (tempLocation == "from") {
  //       setSuggestedFromLocations(data.locations);
  //     } else if (tempLocation == "to") {
  //       setSuggestedToLocations(data.locations);
  //     }
  //   } catch {
  //     console.log("erro");
  //   }
  // }

  const setUsersChosenLocation = function (location, type) {
    console.log(location);
    if (type == "from") {
      setFromLocation(location.name);
      setAirportFromCode(location.id);
    } else if (type == "to") {
      setToLocation(location.name);
      setAirportToCode(location.id);
    }
    // setSuggestedFromLocations("");
    // setSuggestedToLocations("");
  };
  let t = "";
  // const test = (state) => {
  //   console.log(state);
  //   t = state;
  //   console.log("idk");
  // };

  const stateTransfer = (data) => {
    props.onLocation(data);
  };

  const inputBuildHandler = (...inputNames) => {
    return (
      <div className={styles.searchContainer}>
        {
          (t = inputNames.map((name) => {
            return (
              <InputBuilder
                type={name.includes("Date") ? "date" : "text"}
                placeholder={
                  name.includes("Destination")
                    ? "Country, City or Airport"
                    : undefined
                }
                name={name}
                key={name}
                onLocation={stateTransfer}
              />
            );
          }))
        }
      </div>
    );
  };

  return (
    <React.Fragment>
      {inputBuildHandler(
        "fromDestination",
        "toDestination",
        "startDate",
        "endDate"
      )}
    </React.Fragment>
  );
}

export default SearchContainer;
