import React from "react";
import "./Navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const linkClass = (path) =>
    `list-none px-5 font-medium ${
      location.pathname === path
        ? "text-orange-400"
        : "text-gray-700 hover:text-orange-400"
    }`;

  return (
    <div className="py-5 flex justify-between items-center">
      {/* BRAND */}
      <h2
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/home")}
      >
        Thamizhvaanan
      </h2>

      {/* NAV LINKS */}
      <div className="flex items-center">
        <Link className={linkClass("/home")} to="/home">
          Home
        </Link>
        <Link className={linkClass("/blogs")} to="/blogs">
          Blogs
        </Link>
        <Link className={linkClass("/about")} to="/about">
          About
        </Link>
        <Link className={linkClass("/contact")} to="/contact">
  Contact
</Link>

        <button
          className="button-style hidden md:block ml-4"
          onClick={() => navigate("/login")}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Navbar;
