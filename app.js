var express = require('express');
var app = express();
var path = require('path');
var amazon = require('amazon-product-api');
var api_key = require('./api_private');

var title;
var feature;
var review;
var image;

// app.set('view engine', 'ejs');
app.use(express.static('public'));

var client = amazon.createClient({
  awsId: api_key.awsId,
  awsSecret: api_key.awsSecret,
  awsTag: api_key.awsTag
});

// app.get('/', function (req, res){
//   res.render('index');
// });

app.get('/search/:term', function(req, res){
  // console.log();
  client.itemSearch({
    searchIndex: 'All',
    keywords: req.params.term,
    responseGroup: 'SalesRank, EditorialReview, ItemAttributes, Images'
  }).then(function(results){
    // console.log(results);
    res.json(results);
  }).catch(function(err){
    console.log(err);
    console.log('error');
  });
  // res.render('pages/search', { title: title, feature: feature, review: review, image: image });
});

app.listen(8080, function(){
  console.log('Listening on Port 8080')
});
