import axios from "axios";

const headers = { Authorization: "Bearer " + process.env.API_KEY };

// console.log(process.env.API_KEY);

export const allocineReacteurApi = axios.create({
  baseURL: "https://lereacteur-bootcamp-api.herokuapp.com/api/allocine",
  headers,
});
export const imagesUrl = "https://image.tmdb.org/t/p/original/";
