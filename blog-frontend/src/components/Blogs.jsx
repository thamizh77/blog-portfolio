import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./common/Footer";

function Blogs() {
    const API_URL = "http://localhost:4000";

    const [blogs, setBlogs] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    // Fetch blogs
    const fetchBlogs = async () => {
        try {
            const res = await axios.get(`${API_URL}/api/blogs`);
            setBlogs(res.data);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs();
    }, []);

    // Like blog
    const handleLike = async (blog_id) => {
        try {
            await axios.patch(`${API_URL}/api/blogs/like/${blog_id}`);
            fetchBlogs();
        } catch (error) {
            console.error("Error liking blog:", error);
            alert("Backend not reachable");
        }
    };

    // Add new blog
    const handleNewBlogSubmit = async (event) => {
        event.preventDefault();

        try {
            const date = new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            await axios.post(`${API_URL}/api/blogs`, {
                newTitle,
                newContent,
                date,
                likes: 0,
            });

            setNewTitle("");
            setNewContent("");
            fetchBlogs();
            alert("Blog added successfully 🚀");
        } catch (error) {
            console.error("Add blog error:", error);
            alert("Backend not reachable. Check server.");
        }
    };

    return (
        <div className="blog-section py-14">
            <h2 className="text-center text-5xl font-bold mb-14">
                Latest <span className="text-orange-400">Blogs</span> 📚
            </h2>

            {/* Blog creation form */}
            <div className="blog-creation-form mb-8" style={{ width: "80%", margin: "auto" }}>
                <form onSubmit={handleNewBlogSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Blog Title"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="p-2 border rounded"
                        required
                    />
                    <textarea
                        placeholder="Blog Content"
                        value={newContent}
                        onChange={(e) => setNewContent(e.target.value)}
                        className="p-2 border rounded"
                        rows="4"
                        required
                    />
                    <button type="submit" className="bg-orange-400 text-white p-2 rounded hover:bg-orange-600">
                        Add Blog
                    </button>
                </form>
            </div>

            {/* Blogs list */}
            <div className="blogs-container grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4">
                {blogs.map((blog) => (
                    <div key={blog._id} className="blog-post mb-8 p-6 bg-white shadow-lg rounded-lg">
                        <h3 className="font-semibold text-2xl text-gray-800 mb-3">{blog.newTitle}</h3>
                        <p className="text-gray-400 text-sm mb-4">{blog.date}</p>
                        <p className="text-gray-600 mb-4">{blog.newContent}</p>
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={() => handleLike(blog._id)}
                        >
                            👍 Like
                        </span>
                        <span className="ml-2">{blog.likes} Likes</span>
                    </div>
                ))}
            </div>

            <Footer />
        </div>
    );
}

export default Blogs;
