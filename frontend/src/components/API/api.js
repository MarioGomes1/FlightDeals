// const endPoint = (searchTerm = "bos") => {
//   const tequillaEndPoints = {
//     getLocations: `https://tequila-api.kiwi.com/locations/query?term=${searchTerm}&locale=en-US&location_types=airport&limit=10&active_only=true`,
//   };
//   return tequillaEndPoints.getLocations;
// };

// export default endPoint;

// import axios from "axios";
// console.log("hello");
// export default axios.create({
//   baseURL: "https://tequila-api.kiwi.com/locations/",
// });
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://tequila-api.kiwi.com",

  headers: {
    accept: "application/json",
    apikey: process.env.REACT_APP_APP_KEY,
  },
  params: {
    locale: "en-US",
    location_types: "airport",
    limit: 10,
    active_only: true,
  },
});
instance.defaults.headers.common["Authorization"] =
  process.env.REACT_APP_APP_KEY;
