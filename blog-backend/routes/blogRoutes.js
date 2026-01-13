import express from "express";
import Blog from "../models/Blog.js";

const router = express.Router();

// GET blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST blog
router.post("/", async (req, res) => {
  const { newTitle, newContent, date, likes } = req.body;

  if (!newTitle || !newContent) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const blog = new Blog({
      newTitle,
      newContent,
      date,
      likes,
    });

    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// LIKE blog
router.patch("/like/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog.likes += 1;
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
