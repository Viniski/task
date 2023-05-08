import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://axence-recruitment.azurewebsites.net",
});
