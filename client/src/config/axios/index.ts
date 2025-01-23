import axios from "axios";

/**
 * Create axios instance
 */

const storedToken = localStorage.getItem("user");
const parsedToken = storedToken ? JSON.parse(storedToken) : null;

const axiosClient = axios.create({
  adapter: "fetch",
  baseURL: "http://localhost:3000/",
  timeout: 30000,
  validateStatus: status => status < 400,
  headers: {
    Authorization: `Bearer ${parsedToken}`,
  }
});

export default axiosClient;