//this component will clean the data... ***maybe this should be done in a different component??***, render the list of suggested locations.
//once one is selected, it should pass it to the child component as well as a callback function to lift the state back to the parent (this component)
//thinking about...if the childcomponent.len && render it...yup...or not...that's the plan

import React, { useState } from "react";

import styles from "./LocationList.module.css";

function LocationList({ locations, style, setLocationHandler, type }) {
  console.log(locations.name);
  let locationId = "";
  let airportName = "";
  let countryName = "";

  const setLocationInputHandler = (locationName, type) => {
    setLocationHandler(locationName, type, locationId);
  };

  return (
    <div className={styles[style]}>
      <ul>
        {locations.map((location) => {
          locationId = location.id;
          airportName = location.name;
          countryName = location.city.country["name"];
          return (
            <li
              key={location.id}
              onClick={() => setLocationInputHandler(location, type)}
              name="hello"
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
