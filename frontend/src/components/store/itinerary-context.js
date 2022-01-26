import Reach from "react";

const IteneraryContext = React.createContext({
  fromDestination: "",
  toDestination: "",
  startDate: "",
  endDate: "",
});

export default IteneraryContext;
//to use we must provide and consume

//wrap everyone component that will need it
