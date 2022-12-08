const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const authenticate = require("../middleware/authenticate");

require("../db/connection");
const User = require("../models/userSchema");

router.get("/", (req, res) => {
  res.send("HI FROM THE SERVER");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, password, cpassword } = req.body;
  if (!name || !email || !phone || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill the feild properly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already Exist" });
    } else if (password !== cpassword) {
      return res.status(422).json({ error: "passwords are not matching" });
    } else {
      const register = new User({ name, email, phone, password, cpassword });
      await register.save();
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    // checking if email and password are provided or not
    if (!email || !password) {
      return res.status(400).json({ error: "plase fill the data" });
    }
    const userLogin = await User.findOne({ email: email });
    // if user exist then only will check password
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      const token = await userLogin.generateAuthToken();
      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });
      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credientials pass" });
      } else {
        res.json({ message: "user signing successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid Credientials" });
    }
  } catch (error) {
    console.log(error);
  }
});

// About us Page
router.get("/about", authenticate, (req, res) => {
  console.log("HI FROM THE ABOUT");
  res.send(req.rootUser);
  console.log(req.rootUser);
});

// making root for geting userdata
router.get("/getdata", authenticate, (req, res) => {
  res.send(req.rootUser);
});

// Logout Page
router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("Logout Succesfully");
});

module.exports = router;
