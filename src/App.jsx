import { useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const connectBackend = async () => {
    try {
      const response = await axios.get(
        "https://online-auction-platform-fh47.onrender.com/"
      );

      setMessage(response.data);
    } catch (error) {
      setMessage("Backend connection failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-black text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          Auction Bazaar
        </h1>

        <div className="space-x-6">
          <button className="hover:text-yellow-400">
            Home
          </button>

          <button className="hover:text-yellow-400">
            Auctions
          </button>

          <button className="hover:text-yellow-400">
            Login
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-5">
        <h1 className="text-6xl font-bold mb-6">
          Bid Smart. Win Big.
        </h1>

        <p className="text-xl text-gray-600 mb-8">
          Full Stack Online Auction Platform
        </p>

        <button
          onClick={connectBackend}
          className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-gray-800 transition"
        >
          Connect Backend
        </button>

        <p className="mt-6 text-green-600 text-xl font-semibold">
          {message}
        </p>
      </section>

      {/* Auction Cards */}
      <section className="grid md:grid-cols-3 gap-8 p-10">

        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
            alt="Shoes"
            className="h-64 w-full object-cover"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold">
              Nike Sneakers
            </h2>

            <p className="text-gray-600 mt-2">
              Current Bid: $120
            </p>

            <button className="mt-5 bg-black text-white px-5 py-2 rounded-xl">
              Place Bid
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
            alt="Headphones"
            className="h-64 w-full object-cover"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold">
              Headphones
            </h2>

            <p className="text-gray-600 mt-2">
              Current Bid: $90
            </p>

            <button className="mt-5 bg-black text-white px-5 py-2 rounded-xl">
              Place Bid
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Phone"
            className="h-64 w-full object-cover"
          />

          <div className="p-5">
            <h2 className="text-2xl font-bold">
              Smartphone
            </h2>

            <p className="text-gray-600 mt-2">
              Current Bid: $450
            </p>

            <button className="mt-5 bg-black text-white px-5 py-2 rounded-xl">
              Place Bid
            </button>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;