import fs from 'fs';

var data = fs.readFileSync('text.txt', 'uft8');
console.log(data);
