import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "baseURL",
  headers: { "Content-Type": "application/json" },
});
