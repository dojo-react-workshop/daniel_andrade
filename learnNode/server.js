const http = require('http');
const fs = require('fs')

const hostname = 'localhost';
const port = 6789;

const server = http.createServer((req, res) => {
  
  if(req.url == '/'){
            fs.readFile('./index.html', 'utf8', function(err,data){
            if(err) throw err;
            res.end(data);
        });
  }else if(req.url == '/ninjas'){
            fs.readFile('./ninjas.html', 'utf8', function(err,data){
            if(err) throw err;
            res.end(data);
    });
  }else if(req.url == '/dojos'){
            fs.readFile('./dojos.html', 'utf8', function(err,data){
            if(err) throw err;
            res.end(data);
    })
  }else
    //res.status(404)
        res.writeHead(404);
        //res.end();

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

