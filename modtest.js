import fs from "fs";

var txt = fs.readFileSync("DB.txt", "utf8");
console.log(txt);
