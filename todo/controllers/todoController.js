var bodyParser = require('body-parser')

var data = [{item: 'learn node js'}, {item: 'learn web optimization'}, {item: 'JS bundling'}]
var urlencodedParser = bodyParser.urlencoded({extended: false})

module.exports = function(app) {

    app.get('/todo', function(req, res) {
        res.render('todo', {todos: data})
    })

    app.post('/todo',urlencodedParser, function(req, res) {
        data.push(req.body)
        res.json()
    })

    app.delete('/todo/:item', function(req, res) {
        data = data.filter(function(todo){
            return todo.item !== req.params.item.replace(' ','')
        })
        res.json(data)
    })
}