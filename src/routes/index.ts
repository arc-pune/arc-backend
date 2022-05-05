const express = require("express");
// const { register, login } = require("../controllers/auth");
const {
  registerInitialChecks,
  loginInitialChecks,
} = require("../middlewares/auth");
const router = express.Router();

// auth
// router.post("/register", registerInitialChecks, register);
// router.post("/login", loginInitialChecks, login);
