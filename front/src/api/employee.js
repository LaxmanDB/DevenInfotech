import axios, { apiCall } from ".";

const endpoint = "/employee";

export const saveEmp = (empinfo) =>
  apiCall(() => axios.post(endpoint + "/save", empinfo));

export const viewEmp = () => apiCall(() => axios.get(endpoint + "/view"));

export const updateEmp = (empinfo) =>
  apiCall(() => axios.put(endpoint + "/update", empinfo));

export const deleteEmp = (id) =>
  apiCall(() => axios.delete(endpoint + "/delete", id));
