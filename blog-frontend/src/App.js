import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import About from "./components/About";   // 👈 ADD THIS
import Contact from "./components/Contact";

function App() {
  return (
    <div className="px-10 bg-white border rounded-md">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />        {/* Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} /> {/* ✅ ABOUT FIX */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
