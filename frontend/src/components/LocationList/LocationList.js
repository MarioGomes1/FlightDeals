//this component will clean the data... ***maybe this should be done in a different component??***, render the list of suggested locations.
//once one is selected, it should pass it to the child component as well as a callback function to lift the state back to the parent (this component)
//thinking about...if the childcomponent.len && render it...yup...or not...that's the plan

//TODO I think this component should be making the api call
import React, { useState, useContext, Fragment } from "react";

import { inputLocationCTX } from "../../Context/locationListContext";
import styles from "./LocationList.module.css";

function LocationList(style) {
  const { locationList, setSearchFlightObj, setLocationList } =
    useContext(inputLocationCTX);
  let locationId = "";
  let airportName = "";
  let countryName = "";

  const setLocationInputHandler = (locationInfo) => {
    const { id, ...otherInfo } = locationInfo;
    setSearchFlightObj((prev) => ({
      ...prev,
      [locationList.type]: locationInfo.id,
      [`${locationList.type}Name`]: locationInfo.name,
      [`${locationList.type}RestInfo`]: otherInfo,
    }));
    setLocationList("");
  };

  const locationListHelper = locationList.location.map((location) => {
    locationId = location.id;
    airportName = location.name;
    countryName = location.city.country["name"];
    return (
      <li key={location.id} onClick={() => setLocationInputHandler(location)}>
        {`${airportName} (${locationId}) `}
        {countryName}
      </li>
    );
  });
  return <ul>{locationListHelper}</ul>;
}

export default LocationList;
