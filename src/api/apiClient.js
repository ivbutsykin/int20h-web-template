import axios from "axios";
import { BASE_URL } from "../constants/api";

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
