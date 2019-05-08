var express = require ('express');
var app = ('express')
var app = express ();
var bodyparser = require('body-parser');
var urlencodedParser = bodyparser.urlencoded({extended: false});
var assert = require('assert')

require('dotenv').config();

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
        res.render('',{payload:array})
      });
    });
});

app.post('/create-space',urlencodedParser,(req, res)=>{
  var data = {
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    datesavailable: req.body.datesavailble
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

app.listen(3000, function (){
  console.log("Listen on port 3000...")
});
