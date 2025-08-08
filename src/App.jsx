import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Booking from './pages/Booking';
import ScanProduct from './pages/Scanproduct';
import VideoCall from './pages/VideoCall';
import PrivateRoute from './routes/PrivateRoute.jsx';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/booking"
          element={
            <PrivateRoute>
              <Booking />
            </PrivateRoute>
          }
        />
        <Route
          path="/scan-product"
          element={
            <PrivateRoute>
              <ScanProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/video-call"
          element={
            <PrivateRoute>
              <VideoCall />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}
