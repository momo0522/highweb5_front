/** @format */
import axios from "axios";

const { REACT_APP_API_URL } = process.env;


const customAxios = axios.create({
  baseURL: REACT_APP_API_URL + "/api",
});

customAxios.interceptors.response.use(
  (response) => {
    return response;
  },
);

export default customAxios