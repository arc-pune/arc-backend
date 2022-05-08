const express = require("express");
import { Request, Response } from "express";
const { register, login } = require("../controllers/auth");

const {
  registerInitialChecks,
  loginInitialChecks,
} = require("../middlewares/auth");
const router = express.Router();

// auth
router.post("/register", registerInitialChecks, register);
router.post("/login", loginInitialChecks, login);

router.get("/", (req: Request, res: Response) => {
  res.send("ARC-PUNE");
});

module.exports = router;
