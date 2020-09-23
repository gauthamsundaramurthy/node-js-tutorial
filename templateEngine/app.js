var express = require('express')
var app = express()

app.set('view engine', 'ejs')
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/contact', function(req, res) {
    res.sendFile(__dirname + '/contact.html')
})

app.get('/profile/:name', function(req, res) {
    var data = { age: 25, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']}
    res.render('profile', {person: req.params.name, data: data})
})

console.log('server running on port : 3000')
app.listen(3000)
