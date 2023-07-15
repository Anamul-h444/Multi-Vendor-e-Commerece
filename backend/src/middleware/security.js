const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

module.exports = (app) => {
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: "http://127.0.0.1:5173",
      credentials: true,
    })
  );
};
