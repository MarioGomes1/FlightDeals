import styles from "./SearchContainer.module.css";
import { Fragment } from "react";

import GetDestination from "../Destination/GetDestination";
import Button from "../UI/Button/Button";

//TODO might need the context here as well to set the two way binding.
function SearchContainer(props) {
  const inputBuildHandler = (...inputNames) => {
    return (
      <div className={styles["input-container"]}>
        {inputNames.map((name) => {
          return (
            <GetDestination
              type={name.includes("Date") ? "date" : "text"}
              placeholder={
                name.includes("Destination")
                  ? "Country, City or Airport"
                  : undefined
              }
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
        "fromDestination",
        "toDestination",
        "startDate",
        "endDate"
      )}
      {<Button className="searchFlightBtn">Search</Button>}
    </div>
  );
}

export default SearchContainer;
