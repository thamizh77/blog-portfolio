import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // password match check
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      // 🔥 Firebase signup
      await createUserWithEmailAndPassword(auth, email, password);

      alert("Account created successfully 🎉");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-10 bg-white rounded-lg shadow-lg w-[90%] md:w-[40%]"
      >
        <h2 className="text-2xl font-bold mb-5 text-gray-800">
          Create Account
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirm Password</label>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        <p
          className="text-blue-600 cursor-pointer my-3"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </p>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-400 text-white py-2 px-4 rounded w-full hover:bg-orange-600 transition"
        >
          {loading ? "Creating Account..." : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Signup;
