const http = require('node:http');

const users = [
{ id: 1, name: 'Alice' },
{ id: 2, name: 'Bob' }
];

const server = http.createServer((req, res) => {
  if(req.url === '/' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Hello from Forge');
  } 

  if(req.url === '/health' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({status: 'ok'}));
  }

  if(req.url === '/unknown' && req.method === 'GET') {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('Page Not Found');
  }

  if(req.url === '/users' && req.method === 'GET') {
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({users}));
  }

  if(req.url === '/users' && req.method === 'POST') {
    let body = '';
 
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      try {
        const newUser = JSON.parse(body);
        users.push({ id: users.length + 1, name: newUser.name })

        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify(newUser));
      }catch(error) {
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.end(JSON.stringify({error: error.message}));
      }
    });
  }
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});