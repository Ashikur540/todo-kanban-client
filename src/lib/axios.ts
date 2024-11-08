import axios from "axios";
//A querystring parsing and stringifying library

const baseURL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  //Base URL of entire project
  baseURL: `${baseURL}/api/v1`,
  //Helps to seralize params i.e stringify params
});
export default axiosInstance;
