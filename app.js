var express = require("express");
var app = express();
var path = require("path")

app.set("view engine", "ejs");
app.use(express.static('public'));


app.get("/", function(req, res){
  res.render("index")
});

app.listen(process.env.PORT || 1000,  function(){
    console.log("AXIT is Running");
});
