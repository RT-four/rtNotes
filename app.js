const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/public/js/date.js");

const app = express();

const items = ["Do something", "And more", "And more..."];

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  const day = date.getDate();
  res.render("list", {
    day: day,
    items: items
  });
});

app.post("/", function (req, res) {
  const item = req.body.newItem;
  if (item !== "") {
    items.push(item);
  }
  console.log(items);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000.");
});