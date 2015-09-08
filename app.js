// App to go here
var restify = require('restify');
var corps = require('./models/corp');

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function wow(req, res, next) {
    if(req.params.id) {
        corps.get(req.params.id, function(err, corps) {
            if(err) {
                res.send(500, 'Oops, there seems to have been an error');
            } else {
                res.send(corps);    
            }
            
            next();
        }); 
    } else {
        corps.getAll(function(err, corps) {
            if(err) {
                res.send(500, 'Oops, there seems to have been an error');
            } else {
                res.send(corps);    
            }
            
            next();
        });    
    } 
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.get('/corporations', wow);
server.head('/corporations', wow);

server.get('/corporations/:id', wow);
server.head('/corporations/:id', wow);


server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});