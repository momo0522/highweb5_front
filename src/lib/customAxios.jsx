/** @format */
import axios from "axios";

const { REACT_APP_API_URL } = process.env;


const customAxios = axios.create({
  baseURL: "http://localhost:8080" + "/api",
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
);

export default customAxios