import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    newTitle: {
      type: String,
      required: true,
    },
    newContent: {
      type: String,
      required: true,
    },
    date: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
