//this component will clean the data... ***maybe this should be done in a different component??***, render the list of suggested locations.
//once one is selected, it should pass it to the child component as well as a callback function to lift the state back to the parent (this component)
//thinking about...if the childcomponent.len && render it...yup...or not...that's the plan

import React, { useState, useContext } from "react";

import { locations } from "../../Context/locationListContext";
import styles from "./LocationList.module.css";

function LocationList(style) {
  const { locationList } = useContext(locations);
  // console.log(locationList);
  let locationId = "";
  let airportName = "";
  let countryName = "";

  const setLocationInputHandler = (e) => {
    // setLocationHandler(locationName, type, locationId);
    console.log(e.target.name);
  };

  return (
    <div>
      <ul>
        {locationList.data.locations.map((location) => {
          locationId = location.id;
          airportName = location.name;
          countryName = location.city.country["name"];
          return (
            <li
              key={location.id}
              onClick={(e) => setLocationInputHandler(e)}
              // name="hello"
            >
              {`${airportName}(${locationId})`}
              {countryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LocationList;
