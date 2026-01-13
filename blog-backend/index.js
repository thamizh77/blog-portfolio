// index.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 4000;

// -------------------- MIDDLEWARE --------------------
app.use(cors());
app.use(bodyParser.json());

// -------------------- MONGODB CONNECTION --------------------
mongoose
  .connect("mongodb://localhost:27017/blogDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(() =>
    console.log("MongoDB not connected (starter project – OK)")
  );

// -------------------- SCHEMA & MODEL --------------------
const blogSchema = new mongoose.Schema({
  newTitle: String,
  newContent: String,
  date: String,
  likes: Number,
});

const Blog = mongoose.model("Blog", blogSchema);

// -------------------- ROUTES --------------------

// Test route
app.get("/", (req, res) => {
  res.send("Blog Portfolio Backend Running 🚀");
});

// Get all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new blog
app.post("/api/blogs", async (req, res) => {
  const blog = new Blog({
    newTitle: req.body.newTitle,
    newContent: req.body.newContent,
    date: req.body.date,
    likes: req.body.likes || 0,
  });

  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Like a blog
app.patch("/api/blogs/like/:id", async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { likes: 1 } },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(updatedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
