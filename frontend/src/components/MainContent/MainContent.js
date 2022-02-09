import React, { useState } from "react";
import styles from "./MainContent.module.css";
import { Link } from "react-router-dom";

// import Card from "../Card/Card";
import SearchContainer from "../SearchContainer/SearchContainer";
import Button from "../UI/Button/Button";
import LocationList from "../LocationList/LocationList";
import { inputLocationCTX } from "../../Context/locationListContext";
import Hero from "../UI/Hero";

//TODO in the LocationList.js create the search obj
//TODO seriously find some better variable names
function MainContent() {
  const [searchFlightObj, setSearchFlightObj] = useState({});
  const [locationList, setLocationList] = useState("");
  console.log(locationList, searchFlightObj);

  return (
    <inputLocationCTX.Provider
      value={{
        locationList,
        setLocationList,
        searchFlightObj,
        setSearchFlightObj,
      }}
    >
      <Hero />
      <SearchContainer />
      {locationList && <LocationList style="changeMeLater" />}
      <Link
        to={`/test/${searchFlightObj.fromDestination}/${searchFlightObj.toDestination}/${searchFlightObj.startDate}/${searchFlightObj.endDate}`}
      ></Link>
      {/* <Card /> */}
    </inputLocationCTX.Provider>
  );
}

export default MainContent;
