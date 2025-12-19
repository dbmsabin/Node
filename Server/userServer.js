const http = require("http"); //importing built-in http module
const url = require("url"); // Importing the built-in 'url' module
const fs = require("fs"); // Importing the built-in 'fs' module
const path = require("path");
const { json } = require("stream/consumers");

const userSample = path.join(__dirname, "userSample.txt"); // Path to userSample.txt
function readUserFile() {
  const data = fs.readFileSync(userSample, "utf8");
  console.log("User File Content:", data);
  return JSON.parse(data); // Convert JSON string to JavaScript object
}

//Creating an HTTP server
const server = http.createServer((req, res) => {
  const method = req.method; // Getting the request method
  const urlObj = url.parse(req.url, true); // Parsing the request URL
  res.setHeader("Content-Type", "application/json"); // Setting response header to JSON
  if (method == "GET") {
    // Handling GET requests
    if (urlObj.pathname == "/api/users") {
      const userId = urlObj.query?.id;
      const userName = urlObj.query?.name;
      if (userId) {
        const users = readUserFile();
        const filteredUsers = users.filter((user) => user.id == userId); // Filter users by ID
        res.end(JSON.stringify(filteredUsers));
      } else if (userName) {
        const users = readUserFile();
        const filteredUsers = users.filter((user) => user.name == userName);
        res.end(JSON.stringify(filteredUsers));
      } else {
        const users = readUserFile();
        users.sort((a, b) => a.id - b.id); // Sort users by ID in ascending order
        res.end(JSON.stringify(users)); //stringify converts JS object to JSON string
      }
    }
  } else if (method == "POST") {
    // Handling POST requests
    if (urlObj.pathname == "/api/users") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const newUserData = JSON.parse(body); //parse converts JSON string to JS object
        const users = readUserFile(); // Read existing users

        const useIDs = users.map((u) => u.id);
        let newId = 1;
        while (useIDs.includes(newId)) newId++;

        const newUser = { id: newId, ...newUserData }; // Assign unique ID to new user
        users.push(newUser); // Add new user at the beginning of the array

        // users.push({ ...newUser, id: users.length + 1 }); // Add new user with unique ID

        fs.writeFileSync(userSample, JSON.stringify(users, null, 2), "utf8"); // Write updated users back to file
        res.end(
          JSON.stringify({ message: "User added successfully", user: newUser })
        );
      });
    }
  } else if (method == "PUT") {
    // Handling PUT requests
    const patharr = urlObj.pathname.split("/");
    if (patharr[1] == "api" && patharr[2] == "users") {
      const userId = patharr[3];
      const users = readUserFile();
      const user = users.find((u) => u.id == userId); // Find user by ID
      if (user) {
        let body = "";
        req.on("data", (chunk) => (body += chunk)); //appending data chunks to body
        req.on("end", () => {
          const updatedUser = JSON.parse(body); // convert JSON string to JS object
          const updatedUsers = users.map((u) =>
            u.id == userId ? { ...u, ...updatedUser } : u
          ); //map through users and update the matching user
          //spread operator to merge existing user data with updated data
          fs.writeFileSync(
            userSample,
            JSON.stringify(updatedUsers, null, 2),
            "utf8"
          ); // Write updated users back to file
          res.end(JSON.stringify({ message: "User updated successfully" }));
        });
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "User not found" }));
      }
    }
  } else if (method == "DELETE") {
    // Handling DELETE requests
    const patharr = urlObj.pathname.split("/");
    if (patharr[1] == "api" && patharr[2] == "users") {
      const userId = patharr[3]; // Get user ID from URL
      const users = readUserFile();
      const updatedUsers = users.filter((u) => u.id != userId); // Filter out the user to be deleted
      //basically keep all users except the one with matching ID
      fs.writeFileSync(
        userSample,
        JSON.stringify(updatedUsers, null, 2),
        "utf8"
      ); // Write updated users back to file
      res.end(JSON.stringify({ message: "User deleted successfully" }));
    } else {
      res.statusCode = 404;
      res.end(JSON.stringify({ error: "Note not found" }));
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

// Server listening on port 3000
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
