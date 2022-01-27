import React, { useState } from "react";
import styles from "./MainContent.module.css";
import main from "./main.jpg";
import SearchContainer from "../SearchContainer/SearchContainer";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

//TODO refactor these variables fr fr
import LocationList from "../LocationList/LocationList";
import { locations } from "../../Context/locationListContext";

//TODO in the LocationList.js create the search obj
//TODO seriously find some better variable names
function MainContent() {
  const [searchFlightObj, setSearchFlightObj] = useState({});
  const [locationList, setLocationList] = useState("");
  const onLocationListHandler = (d) => {};
  console.log(searchFlightObj);

  // console.log(locationList);

  return (
    <locations.Provider
      value={{
        locationList,
        setLocationList,
        searchFlightObj,
        setSearchFlightObj,
      }}
    >
      <section className={styles.banner}>
        <img src={main} alt="" className={styles.bg} />
      </section>
      <section className={styles.title}>Hello World!</section>
      <div className={styles.test}></div>
      <SearchContainer onLocation={onLocationListHandler} />
      {locationList && <LocationList style="changeMeLater" />}
      <Link
        to={`/test/${searchFlightObj.fromDestination}/${searchFlightObj.toDestination}/${searchFlightObj.startDate}/${searchFlightObj.endDate}`}
      >
        <Button>Search</Button>
      </Link>
      <Card />
    </locations.Provider>
  );
}

export default MainContent;
