const fs = require('fs');
const http = require('http');
const url = require('url');

////////////////////////////////
// FILES
// Blocking, synchronous method
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);
//
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}.`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('File written.');

// Non-blocking, asynchronous method
// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('Error! :(');
//
//   fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//     console.log(data2);
//     fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);
//
//       fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('File has been written! :)');
//       });
//     });
//   });
// });
// console.log('Will read file!');

////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
  // console.log(req);  // logs mammoth request object for viewing
  console.log(req.url);  // will actually result in two requests: 1) URL path, and 2) favicon

  const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
  const dataObj = JSON.parse(data);

  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW page');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT page');
  } else if (pathName === '/api') {
    res.writeHead('200', {'Content-type': 'application/json'});
    // console.log(data);
    res.end(data);
  } else {
    res.writeHead('404', {
      'Content-type': 'text/html',
      'some-random-header': 'Hello, suckers! That page doesn\'t exist.'
    });
    res.end('<h2>404 Page not found</h2>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Server listening on port 8000');
});
