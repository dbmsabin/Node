const { fstat } = require("fs");
const http = require("http"); // Importing the built-in 'http' module
const path = require("path");
const { title } = require("process");
const url = require("url"); // Importing the built-in 'url' module
// Sample data for notes in array for now
const notes = [
  {
    id: 1,
    title: "First Note",
    content: "This is the content of the first note.",
  },
  {
    id: 2,
    title: "Second Note",
    content: "This is the content of the second note.",
  },
];
// Creating an HTTP server
const server = http.createServer((req, res) => {
  const method = req.method; // Getting the request method
  const urlObj = url.parse(req.url, true); // Parsing the request URL
  res.setHeader("Content-Type", "application/json");
  if (method == "GET") {
    if (urlObj.pathname == "/api/notes") {
      const noteId = urlObj.query?.id;
      const title = urlObj.query?.title;
      console.log("Query Parameters:", urlObj.query);
      if (noteId) {
        const filteredNotes = notes.filter((note) => note.id == noteId);
        res.end(JSON.stringify(filteredNotes));
      } else if (title) {
        const filteredNotes = notes.filter((note) => note.title == title);
        res.end(JSON.stringify(filteredNotes));
      } else {
        res.end(JSON.stringify(notes)); //stringify converts JS object to JSON string
      }
    }
  } else if (method == "POST") {
    if (urlObj.pathname == "/api/notes") {
      let body = "";
      req.on("data", (chunk) => (body += chunk));
      req.on("end", () => {
        const newNote = JSON.parse(body); //parse converts JSON string to JS object
        notes.push({ ...newNote, id: notes.length + 1 });
        res.end(JSON.stringify({ messsage: "Note added successfully" }));
      });
    }
  } else if (method == "PUT") {
    const patharr = urlObj.pathname.split("/");
    console.log(patharr);
    console.log("Query Parameters:", urlObj.query);
    if (patharr[1] == "api" && patharr[2] == "notes") {
      const noteId = patharr[3];
      console.log(noteId);
      const note = notes.find((n) => n.id == noteId);
      if (note) {
        let body = "";
        req.on("data", (chunk) => (body += chunk));
        req.on("end", () => {
          const data = JSON.parse(body);
          const title = data.title;
          const content = data.content;
          note.title = title || note.title; // Update title if provided
          note.content = content || note.content; // Update content if provided
          res.end(JSON.stringify({ message: "Note updated successfully" }));
        });
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Note not found" }));
      }
    }
  } 
  else if (method == "DELETE") {
    const patharr = urlObj.pathname.split("/");
    if(patharr[1] == "api" && patharr[2] == "notes") {
      const noteId = patharr[3];
      const noteIndex = notes.findIndex((n) => n.id == noteId); // Find index of the note to be deleted
      if(noteIndex !== -1) { //if note not found noteIndex will be -1
        notes.splice(noteIndex, 1); // Remove the note from the array
        res.end(JSON.stringify({ message: "Note deleted successfully" }));
      } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: "Note not found" }));
      }
    }
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: `Route ${urlObj.pathname} not found` }));
  }
});

// Server listening on port 5000
server.listen(5000, () => {
  console.log("Note app server is listening on port 5000");
});
