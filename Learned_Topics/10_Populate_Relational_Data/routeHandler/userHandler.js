const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const router = express.Router();
const userSchema = require("../schemas/userSchema");
const User = mongoose.model("User", userSchema);
const jwt = require("jsonwebtoken");

// Sign up
router.post("/signup", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((existingUser) => {
      if (existingUser) {
        res.status(400).json({
          error: "Username already exists",
        });
        return; // Break the promise chain if the user already exists
      }

      return bcrypt.hash(req.body.password, 10);
    })
    .then((hashedPassword) => {
      if (!hashedPassword) return; // Skip creating user if previous response was sent

      const user = new User({
        name: req.body.name,
        username: req.body.username,
        password: hashedPassword,
      });

      return user.save();
    })
    .then((result) => {
      if (!result) return;
      res.status(200).json({
        message: "User is created successfully",
        result,
      });
    })
    .catch((err) => {
      if (!res.headersSent) {
        res.status(500).json({
          error: "There was a server side error",
          err,
        });
      }
    });
});

// Login
router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.status(404).send("User not found");
      }
      return bcrypt
        .compare(req.body.password, user.password)
        .then((isValid) => ({ isValid, user })); // Return both isValid and user
    })
    .then(({ isValid, user }) => {
      if (!isValid) {
        return res.status(401).send("Password not matched");
      }
      // console.log(process.env.JWT_SECRET);
      const token = jwt.sign(
        {
          username: user.username,
          userId: user._id,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
      return res
        .status(200)
        .json({ message: "Token successfully generated", token });
    })
    .catch((err) => {
      console.error(err);
      if (!res.headersSent) {
        res.status(500).send(err.message);
      }
    });
});

module.exports = router;
