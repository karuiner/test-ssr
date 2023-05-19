const express = require("express");
const cors = require("cors");
const app = express();

app.set("view engine", "ejs");

app.use(cors());

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/logout", function (req, res) {
  res.redirect("/");
});

app.post("/login", function (req, res) {
  res.redirect("/main");
});

app.get("/main", function (req, res) {
  res.render("main", { username: "test" });
});

app.get("/posts", async function (req, res) {
  res.render("posts", {
    posts: [],
    currentPage: 1,
    totalPage: 2,
  });
});

app.listen(4000, function () {
  console.log("Server is running on port 4000");
});
