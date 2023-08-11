require("dotenv").config();

const express = require("express");
const expressLayout = require("express-ejs-layouts");

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//static files
app.use(express.static("public"));

//templating engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");



//Home
app.get("/", (req, res) => {
  const locals = {
    title: "Nodejs",
    description: "Free NodeJS User Management System",
  };
  res.render("index", locals);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
