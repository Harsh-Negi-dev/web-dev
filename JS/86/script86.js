// const { createServer } = require('node:http');
// const fs = require('fs');
// import {createServer} from "http"
// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello World</h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

import {a, b, c, d, e} from "./mymodule.js";
console.log(a);
console.log(b);
console.log(d+e);
// import obj from "./mymodule.js";
// console.log(obj);

const z = require("./mymodule2.js");
console.log(z);