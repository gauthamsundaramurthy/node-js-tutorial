var http = require('http')

var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url)
    res.writeHead(200, {'Content-Type': 'application/json'})
    
    var myObj = {
        name: 'Gautham',
        job: 'Software developer',
        age: 25
    }
    res.end(JSON.stringify(myObj)) // end method accepts either string or stream     
})

server.listen(3000, '127.0.0.1')
console.log('Now listening to port 3000')