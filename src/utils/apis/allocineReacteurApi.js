import axios from "axios";

const headers = { Authorization: "Bearer " + process.env.API_KEY };

export const allocineReacteurApi = axios.create({
  baseURL: "https://lereacteur-bootcamp-api.herokuapp.com/api/allocine/movies",
  headers,
});
