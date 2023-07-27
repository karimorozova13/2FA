const { basedir } = global;

const { catchError } = require(`${basedir}/utils/helpers`);
const { auth } = require(`${basedir}/middlewares`);
const authCtrl = require(`${basedir}/controllers/auth`);

const express = require("express");
const router = express.Router();

// signup
router.post("/register", catchError(authCtrl.register));

// signin
router.post("/login", catchError(authCtrl.login));

// logout
router.get("/logout", auth, authCtrl.logout);

// current
router.get("/current", auth, authCtrl.current);

// otp verification
router.post("/verify", authCtrl.verifyByOtp);
router.post("/sendOTP", authCtrl.sendOTP);
// router.post("./verifyOTP", authCtrl.verifyOTP);

module.exports = router;
