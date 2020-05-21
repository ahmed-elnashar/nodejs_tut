// const logger = require('./logger');

// logger('message');

//---------------------------------------

// const path = require('path');

// let pathObj = path.parse(__filename);

// console.log(pathObj);

//---------------------------------------

// const os = require('os');

// let totalMemory = os.totalmem();
// let freeMemory = os.freemem();

// console.log(`Total Memory: ${totalMemory} and the Free Memory: ${freeMemory}`);

//---------------------------------------

// const fs = require('fs');

// // const files = fs.readdirSync('./');
// // console.log(files);

// fs.readdir('./', function (err, files) {
//   if (err) console.log(Error, err);
//   else console.log('Result', files);
// });

//---------------------------------------

// const Logger = require('./logger');
// const logger = new Logger();

// // Register a listener
// logger.on('messageLogged', eventArg => console.log('Listener called', eventArg));

// logger.log('message');

//---------------------------------------

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello world');
    res.end();
  }
  if (req.url === '/api/courses') {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3000);

console.log('Listening on port 3000...');
