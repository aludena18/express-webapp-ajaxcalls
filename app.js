"use strict";

import express from "express";

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET Methods
app.get("/", (req, res) => {
  res.render("main");
});

// POST Methods
app.post("/", (req, res) => {});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.render("result", { data: JSON.stringify(req.body) });
  res.end();
});

app.post("/ulist", (req, res) => {
  console.log(req.body);
  res.render("result", { data: JSON.stringify(req.body) });
  res.end();
});

// Start server
app.listen(process.env.PORT || 3000, function () {
  console.log("Server Running!");
});
