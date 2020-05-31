const fs = require('fs');
// const book = {
// 	title : "immortals of meluha",
// 	author : "amish tripathi",
// }
// const bookJSON = JSON.stringify(book);

// var bookdata = JSON.parse(bookJSON);
// fs.writeFileSync('json.json', bookJSON);
var buffer = fs.readFileSync('./json.json');
var infoJSON = buffer.toString();
console.log(JSON.parse(infoJSON));
var infoJSON = JSON.parse(infoJSON);
infoJSON.name = "Tripathi";
infoJSON.age = "22";
var newJSON = JSON.stringify(infoJSON);
fs.writeFileSync('./json.json', newJSON);