const { basedir } = global;

const { catchError } = require(`${basedir}/utils/helpers`);
const { auth } = require(`${basedir}/middlewares`);
const express = require("express");

const authCtrl = require(`${basedir}/controllers/auth`);

const router = express.Router();
// signup
router.post("/register", catchError(authCtrl.register));

// signin
router.post("/login", catchError(authCtrl.login));

// logout
router.get("/logout", auth, authCtrl.logout);

module.exports = router;
