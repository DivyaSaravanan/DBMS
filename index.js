var express=require('express')
var bodyparser=require('body-parser')

var app=express();

var authen=require('./controllers/authen')
var reg=require('./controllers/reg_control')
var des=require('./controllers/destroy')
var upd=require('./controllers/update')

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())


 console.log('hey')
app.post('/api/register',reg.register);
app.post('/api/authenticate',authen.authenticate);
app.post('/api/delete',des.delete);
app.post('/api/updat',upd.updat);
console.log('hello')
app.post('/controllers/authen', authen.authenticate);
app.post('/controllers/register',reg.register);
app.post('/controllers/updat',upd.updat);
console.log('hello')


app.listen(8012);