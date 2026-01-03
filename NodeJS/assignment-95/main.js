// 95 - Perform the below operations using fs module:
// read file, write file, delete file

const fs = require ("fs");

// read a file one.txt file

fs.readFile("one.txt", "utf-8", (err, fileData) => {
    console.log(fileData);
})

// write a file two.txt file

fs.writeFile("two.txt","welcome to node js", "utf-8", (err, fileData) => {
    console.log(fileData);
})

// delete a file three.txt file

fs.unlink("three.txt", "utf-8", (err, fileData) => {
    console.log(fileData);
})
