import axios from "axios";

const baseURL = "http://localhost:5000/";

const instance = axios.create({
  baseURL,
});

export const apiCall = async (apiFn) => {
  let data, error;
  try {
    const response = await apiFn();
    data = response.data;
  } catch (e) {
    error = e.message;
    data = e.response?.data;
  }
  return [data, error];
};

export default instance;
