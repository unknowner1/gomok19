import fs from './fs.js';

var data = fs.readFileSync('text.txt', 'uft8');
console.log(data);
