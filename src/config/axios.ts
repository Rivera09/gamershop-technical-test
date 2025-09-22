import axios from "axios";

const baseURL = "http://localhost:3000/api";

const axiosClient = axios.create({ baseURL });

export default axiosClient;
