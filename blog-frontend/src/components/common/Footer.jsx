import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        
        {/* LEFT */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            Thamizhvaanan
          </span>. All rights reserved.
        </p>

        {/* RIGHT */}
        <p className="text-sm mt-2 md:mt-0">
          Built with ❤️ using{" "}
          <span className="text-orange-400 font-medium">
            MERN Stack
          </span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
