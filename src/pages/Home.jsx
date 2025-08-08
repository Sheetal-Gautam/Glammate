// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <nav className="navbar bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">GlamMate 💄</h1>
        <ul className="flex space-x-6 text-pink-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/scan-product">Scan Product</Link></li>
          <li><Link to="/booking">Booking</Link></li>
          <li><Link to="/video-call">Video Chat</Link></li>
        </ul>
      </nav>

      <section className="text-center py-20 px-4">
        <h2 className="text-4xl font-bold text-pink-700 mb-4">Welcome to GlamMate 💋</h2>
        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          Discover personalized beauty products, scan and try cosmetics virtually, and chat with your AI beauty consultant 24/7.
        </p>
        <a href="#products" className="hero-btn bg-pink-500 text-white px-6 py-3 rounded-full shadow hover:bg-pink-600">Explore Products</a>
      </section>

      {/* Move the rest of the sections similarly... */}
    </>
  );
}
