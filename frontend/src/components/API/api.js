import axios from "axios";
console.log("hello");
export default axios.create({
  baseURL: "https://tequila-api.kiwi.com/locations/",
});
