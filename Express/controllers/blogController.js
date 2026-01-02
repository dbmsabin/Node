import Blog from "../models/blog.js";
// Controller functions to handle blog operations
const getBlogs = async (req, res) => {
  //fetching blogs from the database
  const blogId = req.query.id;
  //If an id is provided in the query, fetch that specific blog, else fetch all blogs
  if (blogId) {
    const filteredBlogs = await Blog.findById(blogId);
    res.send(filteredBlogs);
  } else {
    const blogs = await Blog.find();
    res.send(blogs);
  }
};
//Add a new blog to the database
const addBlog = async (req, res) => {
  const blog = req.body;
  const addedBlog = await Blog.create(blog);
  res.status(201).send({ message: "Blog added successfully", blog: addedBlog });
};

//Update an existing blog identified by its id
const updateBlog = async (req, res) => {
  const blogId = req.params.id;
  const data = req.body;
  const updatedBlog = await Blog.findByIdAndUpdate(blogId, data, { new: true });
  if (updatedBlog) {
    res.send({ message: "Blog updated successfully", blog: updatedBlog });
  } else {
    res.status(404).send({ message: "Blog not found" });
  }
};

const deleteBlog = async (req, res) => {
  const blogId = req.params.id;
  const deletedBlog = await Blog.findByIdAndDelete(blogId);
  if (deletedBlog) {
    res.send({ message: "Blog deleted successfully", blog: deletedBlog });
  } else {
    res.status(404).send({ message: "Blog not found" });
  }
};

export { getBlogs, addBlog, updateBlog, deleteBlog };
