import express from "express";

import {
  getNotes,
  addNote,
  updateNote,
  deleteNotes,
} from "../controllers/noteController.js";

const router = express.Router();
// Defining routes and associating them with controller functions
//concatenating /api/notes to each route
router.get("/", getNotes);
router.post("/", addNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNotes);

export default router;
