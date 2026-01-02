import express from "express";
import logger from "./middleware/logger.js";
// import router from "./routers/noteRouter.js";
import router from "./routers/blogRouter.js";
import mongoose from "mongoose";

//using MVC architecture to structure the code
//Model-View-Controller
//Model- handles data
//View- handles UI
//Controller- handles logic and interaction between Model and View

const app = express();

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(logger); // Using the logger middleware for all routes

// app.use("/api/notes", router); //router for note-related endpoints
app.use("/api/blogs", router); //router for blog-related endpoints

// Connecting to MongoDB using Mongoose and using promises to handle connection success/failure as it is a asynchronous operation
mongoose
  // .connect("mongodb://localhost:27017/notesdb")//connecting to local MongoDB instance for notes database
  .connect("mongodb://localhost:27017/blogsdb") //connecting to local MongoDB instance for blogs database
  .then((conn) =>
    console.log(`Connected to MongoDB at ${conn.connection.host}`)
  )
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Starting the Express server
app.listen(3000, () => {
  console.log("Express server listening on port 3000");
});
