import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert("Login successful!");
        navigate("/");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("Something went wrong");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input mb-4"
        />
        <button type="submit" className="btn bg-pink-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
