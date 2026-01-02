import e from "express";
import {
    getBlogs,
    addBlog,
    updateBlog,
    deleteBlog,
} from "../controllers/blogController.js";

const router = e.Router();
router.get("/", getBlogs);
router.post("/", addBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;