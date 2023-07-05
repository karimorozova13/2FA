import axios from "axios";

const apiConfig = axios.create({
  baseURL: "http://localhost:3003/",
  headers: { credentials: "include" },
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
  verify: async (values) => {
    const res = await apiConfig.post("api/auth/verify", values);
    return res.data;
  },
  logout: async (token) => {
    await apiConfig.get("api/auth/logout", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
  current: async (token) => {
    const res = await apiConfig.get("api/auth/current", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return res.data.data.user;
  },
};
