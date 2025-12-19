const fs = require("fs"); // Importing the built-in 'fs' module
// console.log("File System Module Demonstration:");

// fs.writeFile("test.txt", "Writing to a file using fs module", (err) => {
//   if (err) console.log(err.message);
// });

// fs.appendFile("test.txt", "\nAppending this line to the file.", (err) => {
//   if (err) console.log(err.message);
// });

// fs.readFile("test.txt", (err, data) => {
//   if (err) console.log(err.message);
//   else console.log("File Content:", data.toString());
// });

// fs.readFile("test.txt", 'utf8', (err, data) => {
//   if (err) console.log(err.message);
//   else console.log("File Content:", data);
// });

// fs.unlink("test.txt", (err) => {
//   if (err) console.log(err.message);
//   else console.log("test.txt file deleted successfully.");
// });

//HOMEWORK
//use promises and async await with fs module methods
function readFilePromise(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
async function getFileData() {
  try {
    const data = await readFilePromise("test.txt");
    console.log("File Content using Async/Await:", data);
  } catch (err) {
    console.log(err.message);
  }
}
getFileData();
