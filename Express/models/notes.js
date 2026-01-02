import mongoose from "mongoose";
//setting up a schema for notes collection in MongoDB
const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
  },
  content: {
    type: String,
    required: true,
    minlength: 1,
  },  
});

const Note = mongoose.model("note", noteSchema);
export default Note;
