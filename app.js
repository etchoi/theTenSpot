var express = require('express');
var cors = require('cors');
var app = express();
var path = require('path');
var amazon = require('amazon-product-api');
var api_key = require('./api_private');

app.use(express.static('public'));
app.use(cors());

var client = amazon.createClient({
  awsId: api_key.awsId,
  awsSecret: api_key.awsSecret,
  awsTag: api_key.awsTag
});

// app.get('/', function (req, res){
//   res.render('indexasdf');
// });

app.get('/search/:term', function(req, res){
  // console.log();
  client.itemSearch({
    searchIndex: 'All',
    keywords: req.params.term,
    responseGroup: 'SalesRank, EditorialReview, ItemAttributes, Images, Reviews'
  }).then(function(results){
    res.json(results);
  }).catch(function(err){
    console.log(err);
    console.log('error');
  });
});

app.get('/item/:id', function(req, res){
  client.itemLookup({
    itemId: req.params.id
  }).then(function(results){
    console.log(results[0].ASIN[0]);
    res.json(results);
  }).catch(function(err){
    console.log(results);
  })
})

app.listen(8080, function(){
  console.log('Listening on Port 8080')
});
