import styles from "./SearchContainer.module.css";
import { Fragment } from "react";

import InputBuilder from "../InputBuilder/InputBuilder";
import Button from "../UI/Button/Button";

//TODO might need the context here as well to set the two way binding.
function SearchContainer(props) {
  const inputBuildHandler = (...inputNames) => {
    return (
      <div className={styles.searchContainer}>
        {inputNames.map((name) => {
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
            />
          );
        })}
      </div>
    );
  };

  return (
    <Fragment>
      {inputBuildHandler(
        "fromDestination",
        "toDestination",
        "startDate",
        "endDate"
      )}
      <Button className="searchFlightBtn">Search</Button>
    </Fragment>
  );
}

export default SearchContainer;
