import axios from "axios";

const Client = axios.create({
  baseURL: "https://api.bikunku.com",
  timeout: 1000,
});

export default Client;
