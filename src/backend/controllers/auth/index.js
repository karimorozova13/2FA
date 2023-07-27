const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const verifyByOtp = require("./verify");
const sendOTP = require("./sendOTP");

module.exports = {
  register,
  login,
  logout,
  current,
  verifyByOtp,
  // verifyOTP,
  sendOTP,
};
