import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const validEmail = "admin@gmail.com";
    const validPassword = "123456";
    if (email === validEmail && password === validPassword) {
        localStorage.setItem("isLoggedIn", "true");
        navigate("/");
      } else {
        setError("Invalid email or password.");
      }
      
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#faeee3] to-[#f9e2c3] px-4">
      <div className="bg-white shadow-xl rounded-xl p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Login to Dashboard
        </h2>

        <div className="w-full flex justify-center mb-4">
          <img
            src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?t=st=1746526808~exp=1746530408~hmac=7150cc9abc91bac629364328d16fd2dba09d6c628b3e6b87244ccf23583840cd&w=900"
            alt="Login illustration"
            className="h-32 object-contain"
          />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a31d1d]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password*"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#a31d1d]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full cursor-pointer bg-[#a31d1d] text-white py-2 rounded-full hover:bg-[#891818] transition"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
