import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
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
  );
}
