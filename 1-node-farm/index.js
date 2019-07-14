const fs = require('fs');

// Blocking, synchronous method
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);
//
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}.`;
// fs.writeFileSync('./starter/txt/output.txt', textOut);
// console.log('File written.');

// Non-blocking, asynchronous method
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) => {
  console.log(data);
});
console.log('Will read file!');
