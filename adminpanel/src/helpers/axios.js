import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:2000/api/",
  headers: {
    Authorization: "",
    // contentType: "application/json",
  },
});

export default axiosInstance;
