import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://13.209.7.61/",
  headers: { "Content-Type": "application/json" },
});
