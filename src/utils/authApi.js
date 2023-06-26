import axios from "axios";

const apiConfig = axios.create({
  baseURL: "http://localhost:3003/",
  headers: {},
});

export const authApi = {
  register: async (values) => {
    const res = await apiConfig.post("api/auth/register", values);
    return res.data;
  },
  login: async (values) => {
    const res = await apiConfig.post("api/auth/login", values);
    return res.data;
  },
};
