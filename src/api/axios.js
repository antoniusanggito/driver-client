import axios from "axios";

const Client = axios.create({
  baseURL: "http://api.bikunku.com",
  timeout: 1000,
});

export default Client;
