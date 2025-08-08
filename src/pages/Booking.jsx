import { useEffect, useState } from "react";

function Booking() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/consult")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Booking Page</h1>
      <p className="mt-2 text-green-600">{message}</p>
    </div>
  );
}

export default Booking;
