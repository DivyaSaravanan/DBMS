var express=require('express')
var bodyparser=require('body-parser')

var app=express();

var myint=require('./controllers/myinterest')
var mat=require('./controllers/matchingdate')
 var place=require('./controllers/place_info')
var avail=require('./controllers/available')
var add=require('./controllers/interests')
var myhol=require('./controllers/Myholidays')


app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.post('/api/interest',myint.interest);
app.post('/api/dates',mat.dates);
app.post('/api/information',place.information);
app.post('/api/availabledata',avail.availabledata);
app.post('/api/addinterest',add.addinterest);
app.post('/api/holidays',myhol.holidays);

app.listen(3000);
