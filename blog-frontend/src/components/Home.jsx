import React from "react";
import BlogProfileImage from "../assets/profile.jpg";
import CSS from "../assets/css-3.png";
import HTML from "../assets/html.png";
import DB from "../assets/data-server.png";
import JS from "../assets/js.png";
import REACTICON from "../assets/physics.png";
import NODE from "../assets/node-js.png";
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.png";
import P3 from "../assets/p3.png";
import BlogImage from "../assets/blogImage.png";
import { useNavigate } from "react-router-dom";
import Footer from "./common/Footer";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO SECTION */}
      <div className="flex items-center justify-center mt-10">
        <div className="w-full sm:w-1/2 flex-col justify-center">
          <h2 className="text-3xl md:text-6xl font-bold pb-2">
            Hi! I Am
          </h2>
          <h2 className="text-4xl md:text-7xl font-bold text-orange-400 py-2">
            Thamizhvaanan
          </h2>

          <img
            src={BlogProfileImage}
            className="w-60 block sm:hidden"
            alt="Profile"
          />

          <p className="py-4 text-gray-600">
            I am a passionate MERN Stack Developer and an AI & Data Science
            engineering student. I enjoy building real-world web applications
            using React, Node.js, Express, and MongoDB.
          </p>

          <button
            className="button-style mt-2"
            onClick={() => navigate("/blogs")}
          >
            View My Work
          </button>
        </div>

        <div className="justify-center hidden sm:block">
          <img
            src={BlogProfileImage}
            className="w-60 md:w-96"
            alt="Developer Illustration"
          />
        </div>
      </div>

      {/* TECH STACK */}
      <div className="flex justify-evenly py-10">
        <img src={HTML} alt="HTML" style={{ width: "50px" }} />
        <img src={CSS} alt="CSS" style={{ width: "50px" }} />
        <img src={JS} alt="JavaScript" style={{ width: "50px" }} />
        <img src={REACTICON} alt="React" style={{ width: "50px" }} />
        <img src={DB} alt="MongoDB" style={{ width: "50px" }} />
        <img src={NODE} alt="Node.js" style={{ width: "50px" }} />
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="flex flex-col mt-10 items-center justify-around sm:flex-row">
        <div className="flex-col">
          <div className="mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60">
            <div className="rounded-full p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600">
              5+
            </div>
            <p className="text-center font-medium mt-2">
              Projects Completed
            </p>
          </div>

          <div className="mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60">
            <div className="rounded-full p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600">
              1+
            </div>
            <p className="text-center font-medium mt-2">
              Year of Learning Experience
            </p>
          </div>
        </div>

        <div className="ml-4 mt-6 sm:mt-0">
          <h2 className="text-3xl sm:text-7xl font-bold">
            My Skills &
          </h2>
          <h2 className="text-3xl sm:text-7xl font-bold text-orange-400">
            Services
          </h2>
          <p className="my-4 text-gray-600">
            I develop responsive frontend applications, MERN stack projects,
            REST APIs, and beginner-friendly AI-integrated web solutions.
          </p>
          <a
  href="/cv.pdf"
  download
  className="button-style mt-2 inline-block"
>
  Download Resume
</a>

        </div>
      </div>

      {/* PROJECTS */}
      <div>
        <h2 className="text-center text-5xl my-14 font-bold">
          My <span className="text-orange-400">Projects</span>
        </h2>

        <div className="flex justify-around my-5 flex-col sm:flex-row gap-6">
          <img src={P1} className="w-64 border rounded-md cursor-pointer" alt="Project 1" />
          <img src={P2} className="w-64 border rounded-md cursor-pointer" alt="Project 2" />
          <img src={P3} className="w-64 border rounded-md cursor-pointer" alt="Project 3" />
        </div>
      </div>

      {/* BLOG SECTION */}
      <div className="flex items-center justify-center my-14">
        <div className="justify-center hidden sm:block">
          <img
            src={BlogImage}
            className="w-60 md:w-96"
            alt="Blog"
          />
        </div>

        <div className="w-full sm:w-1/2 flex-col justify-center ml-6">
          <h2 className="text-3xl md:text-6xl font-bold pb-2">
            I Write
          </h2>
          <h2 className="text-4xl md:text-7xl font-bold text-orange-400 py-2">
            Tech Blogs
          </h2>

          <p className="py-4 text-gray-600">
            I share my learning journey in MERN Stack, JavaScript, React,
            backend development, and real project experiences through blogs.
          </p>

          <button
            className="button-style mt-2"
            onClick={() => navigate("/blogs")}
          >
            Read My Blogs
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
