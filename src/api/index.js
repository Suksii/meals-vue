import axios from "axios";

export const request = axios.create({
  baseURL: "https://www.themealdb.com/api/json/v1/1/",
});
