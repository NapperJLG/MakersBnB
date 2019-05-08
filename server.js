var express = require ('express');

var app = express ();

app.set('view engine', 'ejs');

app.get ("/", function (req, res) {
 res.render('login')
});

app.get("/", function (req, res) {
  res.render('login')
})

app.listen(3000, function (){
  console.log("Listen on port 3000...")
});
