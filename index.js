const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
 

    
    switch (req.url) {
      case "/":
    res.write('<h1 style="color: red">Hello World!</h1>');
     break;
    case "/about":
    res.write('<p> A day without sunshine is like... night</p>');
    break;
    case "/contact":
    res.write('<h1 style="color: blue">Bye friend</h1>');
    break;

    default:
    res.statusCode = 404;
    res.write('<h1 style="color: red">404 Not Found</h1>');
    break;
  }
res.end();
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });