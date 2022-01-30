//this component will clean the data... ***maybe this should be done in a different component??***, render the list of suggested locations.
//once one is selected, it should pass it to the child component as well as a callback function to lift the state back to the parent (this component)
//thinking about...if the childcomponent.len && render it...yup...or not...that's the plan

//TODO I think this component should be making the api call
import React, { useState, useContext } from "react";

import { inputLocationCTX } from "../../Context/locationListContext";
import styles from "./LocationList.module.css";

function LocationList(style) {
  const { locationList, setSearchFlightObj } = useContext(inputLocationCTX);
  let locationId = "";
  let airportName = "";
  let countryName = "";

  const setLocationInputHandler = (locationID) => {
    // console.log(locationList.type);
    setSearchFlightObj((prev) => ({
      ...prev,
      [locationList.type]: locationID,
    }));
  };

  const locationListHelper = locationList.data.locations.map((location) => {
    locationId = location.id;
    airportName = location.name;
    countryName = location.city.country["name"];
    return (
      <li
        key={location.id}
        onClick={() => setLocationInputHandler(location.id)}
      >
        {`${airportName}(${locationId})`}
        {countryName}
      </li>
    );
  });
  return (
    <div>
      <ul>{locationListHelper}</ul>
    </div>
  );
}

export default LocationList;
