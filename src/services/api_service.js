import axios from "axios";
import { store } from "./store";

const ApiClient = axios.create({
  baseURL: "http://localhost:3000",
});

ApiClient.interceptors.request.use(
  (config) => {
    const { headers } = store;
    const newConfig = config;

    if (headers) {
      newConfig.headers["access-token"] = headers["access-token"];
      newConfig.headers["client"] = headers["client"];
      newConfig.headers["uid"] = headers["uid"];
    }

    return newConfig;
  },
  (error) => Promise.reject(error)
);

ApiClient.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    store.clearStorage();
  }

  return Promise.reject(error);
});

export default ApiClient;
