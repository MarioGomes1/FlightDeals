import { useState, useContext } from "react";
import styles from "./SearchContainer.module.css";

import GetDestination from "../Destination/GetDestination";
import { inputLocationCTX } from "../../Context/locationListContext";
import Button from "../UI/Button/Button";

//TODO might need the context here as well to set the two way binding.
function SearchContainer(props) {
  const [value, setValue] = useState();
  const ctx = useContext(inputLocationCTX);

  const inputBuildHandler = (...inputNames) => {
    return (
      <div className={styles["input-container"]}>
        {inputNames.map((name) => {
          return (
            <GetDestination
              type={name.includes("Date") ? "date" : "text"}
              placeholder={`Enter ${
                name == "fromDestination" ? "an Origin" : "a Destination"
              }`}
              name={name}
              key={name}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.searchContainer}>
      {inputBuildHandler(
        "fromOriginCode",
        "toDestinationCode",
        "startDate",
        "endDate"
      )}
      {<Button className="searchFlightBtn">Search</Button>}
    </div>
  );
}

export default SearchContainer;
