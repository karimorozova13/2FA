const { basedir } = global;

const { catchError } = require(`${basedir}/utils/helpers`);
const express = require("express");

const authCtrl = require(`${basedir}/controllers/auth`);

const router = express.Router();

// signup
router.post("/register", catchError(authCtrl.register));

// signin
router.post("/login", catchError(authCtrl.login));

module.exports = router;
