import React from "react";

function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      
      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        Contact <span className="text-orange-400">Me</span>
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-700 text-lg mb-10">
        Have a project idea, collaboration, or just want to connect?
        Feel free to reach out to me anytime 👇
      </p>

      {/* CONTACT DETAILS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

          <p className="mb-3 text-gray-700">
            📧 <span className="font-medium">Email:</span>{" "}
            <a
              href="mailto:jrthamizh2006@gmail.com"
              className="text-orange-400 hover:underline"
            >
              jrthamizh2006@gmail.com
            </a>
          </p>

          <p className="mb-3 text-gray-700">
            📍 <span className="font-medium">Location:</span> Pondicherry, India
          </p>

          <p className="mb-3 text-gray-700">
            💻 <span className="font-medium">Role:</span> MERN Stack Developer
          </p>

          <p className="text-gray-700">
            🤝 Open for internships, freelance projects, and collaborations.
          </p>
        </div>

        {/* RIGHT */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Quick Message</h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border rounded"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border rounded"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="button-style self-start"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
