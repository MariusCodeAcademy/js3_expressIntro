// isitraukiam express is npm
const express = require('express');
const path = require('path');

// sukuriam express app objekta
const app = express();

const indexPath = path.join(__dirname, 'html', 'index.html');
// console.log(' indexPath', indexPath);

// main route
app.get('/', (req, res) => {
  //   res.send('<h1>Hello world from Express</h1>');
  res.sendFile(indexPath);
});

console.log('Works');

// paleidzia serveri ir klausosi http ir kt requestu nurodytu portu
app.listen(3000, () => console.log('server is running'));
