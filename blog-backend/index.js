const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// 🔥 IMPORTANT: Render gives PORT dynamically
const PORT = process.env.PORT || 4000;

// -------------------- MIDDLEWARE --------------------
app.use(cors());
app.use(express.json());

// -------------------- MONGODB CONNECTION --------------------
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch((err) => console.error("MongoDB Error ❌", err));

// -------------------- SCHEMA & MODEL --------------------
const blogSchema = new mongoose.Schema(
  {
    newTitle: { type: String, required: true },
    newContent: { type: String, required: true },
    date: String,
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

// -------------------- ROUTES --------------------

// Health check
app.get("/", (req, res) => {
  res.send("Blog Portfolio Backend Running 🚀");
});

// Get all blogs
app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new blog
app.post("/api/blogs", async (req, res) => {
  const { newTitle, newContent, date } = req.body;

  if (!newTitle || !newContent) {
    return res.status(400).json({ message: "Title & Content required" });
  }

  try {
    const blog = new Blog({
      newTitle,
      newContent,
      date,
    });

    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Like blog
app.patch("/api/blogs/like/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    blog.likes += 1;
    await blog.save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// -------------------- START SERVER --------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
