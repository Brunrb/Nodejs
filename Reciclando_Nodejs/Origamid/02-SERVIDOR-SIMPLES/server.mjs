import { createServer } from 'node:http';

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(req.url);
    if(req.method === 'GET' && req.url === '/') {
        res.statusCode = 200;
        res.end('Home');
    } else if (req.method === 'POST' && req.url === '/produtos') {
        res.statusCode = 201;
        res.end('Produtos');
    } else {
        res.statusCode = 404;
        res.end('Página não encontrada');
    }
    console.log(req.method);
});

server.listen(3000, () => {
    console.log('Server: http://localhost:3000');
});