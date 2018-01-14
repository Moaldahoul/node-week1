// let x = require("./test-import.js");



// console.log(x);
// // console.log("Hello Life");

const fs = require("fs");
// console.log(fs);

fs.readFile("readme02.txt", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log("readme-2 read");
});

fs.readFile("readme.txt", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log("readme read");
});

fs.readFile("readme.txt", "utf8", (err, data) => {
    if (err) console.log(err);
    console.log("readme read");
});

console.log("Next line of code");