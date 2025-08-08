import { useEffect, useState } from "react";

function ScanProduct() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/ai")
      .then((res) => res.json())
      .then((data) => setResponse(data.message))
      .catch((err) => console.error("FastAPI error:", err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">AI Scan Page</h1>
      <p className="mt-2 text-blue-600">{response}</p>
    </div>
  );
}

export default ScanProduct;
