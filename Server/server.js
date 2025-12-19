const http = require('http'); // Importing the built-in 'http' module
//Alternate for .mjs files
//import http from 'http';
const fs = require("fs"); // Importing the built-in 'fs' module
const user = {
    username : "john_doe",
    email : "example123@gmail.com"
}
// Creating an HTTP server with a callback function where 1st param is request and 2nd is response
const server = http.createServer((req, res) => { 
    console.log(req.url,req.method); // Logging the request URL and method
    // res.setHeader("Content-Type","text/html"); // Setting the response header
    res.setHeader("Content-Type","application/json"); // Setting the response header to JSON
    res.end(JSON.stringify(user)); // Ending the response with a JSON message


    // fs.readFile("index.html",(err,data)=>{ // Reading the index.html file
    //     if(err){
    //         console.log(err.message);
    //     }
    //     else{
    //         // res.write(data); // Writing the file data to the response
    //         res.end(data); // Ending the response with file data
    //     }
    // });

    // const url = req.url; // Getting the request URL
    // if(url == "/"){
    //     res.end("<h1>Home Page</h1>");
    // }
    // else if(url == "/about"){
    //     res.end("<h1>About Page</h1>");
    // }
    // else{
    //     res.statusCode = 404; // Setting status code to 404 for not found
    //     res.end("<h1>404 Page Not Found</h1>");
    // }



    // res.write("<h3>Welcome to the HTTP Servers!</h3>"); //Writing a response
    // res.end(); // Ending the response
});

server.listen(3000, () =>  // Server listens on port 3000
    console.log("Server is listening on port 3000")
);