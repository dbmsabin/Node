import Note from "../models/notes.js";
// Controller functions to handle note operations
const getNotes = async (req, res) => {
  const noteId = req.query.id;
  if (noteId) {
    const filteredNotes = await Note.findById(noteId);
    res.send(filteredNotes);
  } else {
    const notes = await Note.find();
    res.send(notes);
  }
};

const addNote = async (req, res) => {
  const note = req.body;
  const addedNote = await Note.create(note);
  res.status(201).send({ message: "Note added successfully", note: addedNote });
};

const updateNote = async (req, res) => {
  const noteId = req.params.id;
  const data = req.body;
  const updatedNote = await Note.findByIdAndUpdate(noteId, data, { new: true });
  if (updatedNote) {
    res.send({ message: "Note updated successfully", note: updatedNote });
  } else {
    res.status(404).send({ message: "Note not found" });
  }
};

const deleteNotes = async (req, res) => {
  const noteId = req.params.id;
  const deletedNote = await Note.findByIdAndDelete(noteId);
  if (deletedNote) {
    res.send({ message: "Note deleted successfully", note: deletedNote });
  } else {
    res.status(404).send({ message: "Note not found" });
  }
};

export { getNotes, addNote, updateNote, deleteNotes };
