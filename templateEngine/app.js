var express = require('express')
var app = express()
var bodyParser =  require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs')
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body)
    res.render('contact-success', {data: req.body})
})

app.get('/contact', function(req, res) {
    res.render('contact', {qs: req.query})
})

app.get('/profile/:name', function(req, res) {
    var data = { age: 25, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data})
})

console.log('server running on port : 3000')
app.listen(3000)
