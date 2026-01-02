import mongoose from "mongoose";
//setting up a schema for blog collection in MongoDB
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 3,
    },  
    text: {
    type: String,
    required: true,
    minlength: 1,
    }, 
    isPublished: {
    type: Boolean,
    default: false,
    }, 
    likes: {
    type: Number,
    default: 0,
    } 
});
const Blog = mongoose.model("blog", blogSchema);    
export default Blog;