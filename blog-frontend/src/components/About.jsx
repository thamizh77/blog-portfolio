import React from "react";

function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        About <span className="text-orange-400">Me</span>
      </h1>

      {/* INTRO */}
      <p className="text-gray-700 text-lg mb-4">
        Hi  I’m <span className="font-semibold">Thamizhvaanan</span>, a
        passionate <span className="text-orange-400 font-medium">MERN Stack Developer</span>{" "}
        and an <span className="font-medium">AI & Data Science engineering student</span>.
      </p>

      <p className="text-gray-700 text-lg mb-4">
        I enjoy building real-world web applications using{" "}
        <span className="font-medium">
          React, Node.js, Express, and MongoDB
        </span>.
        I focus on writing clean code, creating responsive UI, and solving
        practical problems using technology.
      </p>

      {/* PROJECT INFO */}
      <h2 className="text-2xl font-semibold mt-8 mb-3">
        About This Project
      </h2>

      <p className="text-gray-700 mb-3">
        This Blog Portfolio is a full-stack MERN application where users can:
      </p>

      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>Create and publish blog posts</li>
        <li>View all blogs dynamically from MongoDB</li>
        <li>Like blog posts in real time</li>
        <li>Navigate smoothly using React Router</li>
      </ul>

      {/* EMC */}
      <p className="text-gray-700 mb-6">
        This project was built as part of the{" "}
        <span className="font-semibold text-orange-400">
          Error Makes Clever MERN Stack Bootcamp
        </span>{" "}
        to gain hands-on experience in full-stack development.
      </p>

      {/* GOAL */}
      <h2 className="text-2xl font-semibold mb-3">My Goal</h2>

      <p className="text-gray-700">
        My goal is to become a skilled full-stack developer, work on impactful
        products, and continuously grow by learning new technologies and
        building meaningful projects.
      </p>
    </div>
  );
}

export default About;
