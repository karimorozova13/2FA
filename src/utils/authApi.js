import axios from "axios";
console.log(process.env.NEXT_PUBLIC_BACKEND_API_URL);

const apiConfig = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL, // "http://localhost:3003/",
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
  sendOTP: async (values) => {
    const res = await apiConfig.post("api/auth/sendOTP", values);
    return res.data;
  },
  verifyOTP: async (values) => {
    const res = await apiConfig.post("api/auth/verifyOTP", values);
    return res.data;
  },
  loginSendOTP: async (values) => {
    const res = await apiConfig.post("api/auth/loginSendOTP", values);
    return res.data;
  },
  loginVerifyOTP: async (values) => {
    const res = await apiConfig.post("api/auth/loginVerifyOTP", values);
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
