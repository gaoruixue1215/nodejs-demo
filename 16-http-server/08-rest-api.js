#!/usr/bin/node

const http = require('http');
var items = ['吃饭','睡觉'];

http.createServer((req, res) => {
  console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  console.log(req.headers);
  console.log('');
  
  switch(req.method) {
    case 'GET':
      select(req, res);
      break;
    case 'POST':
      insert(req, res);
      break;
    case 'PUT':
      update(req, res);
      break;
    case 'DELETE':
      del(req, res);
      break;
    default:
      res.end('Something Wrong!');
  }
}).listen(8080);

function select(req, res) {
  var data = JSON.stringify(items);
  res.setHeader("Content-Length",Buffer.byteLength(data));
  res.setHeader("Content-Type",'text/plain; charset="utf-8"');
  res.setHeader("Access-Control-Allow-Origin",'*');
  res.end(JSON.stringify(items));
}

function insert(req, res) {
  var item = '';
  req.on('data', function(data) { item += data;  });
  req.on('end', function() {
    items.push(item);
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.end('Insert OK!');
  });
}

function del(req, res) {
  var arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
  }

  var i = parseInt(arg[1]);

  res.setHeader('Access-Control-Allow-Origin', '*');

  if(!items[i]) {
    res.statusCode = 404;
    res.end('Not found');
                  
  } else {
    items.splice(i, 1);
    res.statusCode = 200;
    res.end('Delete OK');
                      
  }

}

function update(req, res) {
  var arg = req.url.split('/');
  if(arg[1] === '') {
    items = [];
  }

  var item = '';
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.on('data', (chunk) => { item += chunk;  });
  req.on('end', () => {
    var i = parseInt(arg[1]);
    if(!items[i]) {
      res.statusCode = 404;
      res.end('Not found');
    } else {
      items[i] = item;
      res.statusCode = 200;
      res.end('update OK');
    }
                
  });
}
