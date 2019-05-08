var express = require ('express');
var app = ('express')
var app = express ();
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});
var assert = require('assert')

require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;

var url = process.env.DATABASE_URL;

app.set('view engine', 'ejs');


app.get('/', (req, res)=>{
    let array = []
    MongoClient.connect((url), function(err, client){
      var db = client.db('makersbnb')
      assert.equal(null, err)
      var userData = db.collection('spaces').find({});
      userData.forEach(function(doc, err){
        assert.equal(null, err);
        array.push(doc)
      }, function(){
        db.close;
        res.render('login',{payload:array})
      });
    });
});

app.post('/createspace',urlencodedParser,(req, res)=>{
  var data = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    datesavailable: req.body.datesavailable
  }

  MongoClient.connect((url), function(err, client){
    var db = client.db('makersbnb')
    assert.equal(null, err);
    db.collection('spaces').insertOne(data, function(){
    assert.equal(null, err);
    db.close
    });
  });
  res.redirect('/')


});

app.get("/createspace", function (req, res) {
  res.render('accomodation')
})

app.listen(3000, function (){
  console.log("Listen on port 3000...")
});
