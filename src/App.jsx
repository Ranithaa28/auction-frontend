import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  const connectBackend = async () => {
    try {
      const response = await axios.get(
        "https://online-auction-platform-fh47.onrender.com/"
      );

      setMessage(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Backend connection failed");
    }
  };

  return (
    <div className="container">
      <h1>Auction Bazaar</h1>
      <p>Full Stack Online Auction Platform</p>

      <button onClick={connectBackend}>
        Connect Backend
      </button>

      <h2>{message}</h2>
    </div>
  );
}

export default App;