import axios from "axios";

// base url to make requests to the movie database

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// this instance can be renamed as there is export default
export default instance;
