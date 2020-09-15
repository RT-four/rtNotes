const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const items = ["Do something", "And more", "And more..."];

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({   
  extended: true
}));
app.use(express.static("public")); 
 
app.get("/", function (req, res) {
  // const days = ["Sanday", "Monday", "Tuesday", "Wednesfday", "Thursday", "Friday", "Saturday"];
  var today = new Date();

  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }; 

  var day = today.toLocaleDateString("en-US", options);
  console.log(day);

  res.render("list", { 
    day: day,
    items: items
  });
});

app.post("/", function (req, res) { 
  var item = req.body.newItem;
  if(item !== ""){
    items.push(item);
  }
  console.log(items);
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Server started on port 3000.");
});