//Basic Lib import
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const router = require("./routes/api");
// require("dotenv").config();
const dotEnv = require("dotenv");

// env  file call function
dotEnv.config({
  path: "backend/config/config.env",
});

//Security Middleware Lib import
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cors = require("cors");

//Database Lib import
const mongoose = require("mongoose");

//Security Middleware implementation
app.use(helmet());
app.use(cors());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(cookieParser());

//Body Parser Middleware implementation
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(bodyParser.text({ limit: "200mb" }));

//Request Limiter Middleware implementation
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use(limiter);

//Mongoose Connection
let URI = `${process.env.localhost_database_uri}`;
let OPTION = { autoIndex: true, useNewUrlParser: true };
mongoose.connect(URI, OPTION, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(
      "Connected to MongoDB",
      `${process.env.localhost_database_uri}`
    );
  }
});

//Routing implementation
app.use("/api/v1", router);

//undefined route handler
app.use("*", (req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

module.exports = app;
