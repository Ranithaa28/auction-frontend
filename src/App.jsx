import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const testBackend = async () => {
    try {
      const response = await axios.get(
        "https://online-auction-platform-fh47.onrender.com"
      );

      setMessage("Backend Connected Successfully");
    } catch (error) {
      setMessage("Backend Connection Failed");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f172a",
        color: "white",
        flexDirection: "column",
        fontFamily: "Arial",
      }}
    >
      <h1>Auction Bazaar</h1>

      <button
        onClick={testBackend}
        style={{
          padding: "12px 20px",
          border: "none",
          background: "#2563eb",
          color: "white",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Connect Backend
      </button>

      <p style={{ marginTop: "20px" }}>{message}</p>
    </div>
  );
}

export default App;