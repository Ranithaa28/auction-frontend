import axios from "axios";
import "./App.css";

const API = const API =
 "https://online-auction-platform-fh47.onrender.com/api/test";

function App() {

  const connectBackend = async () => {
    try {
      const response = await axios.get(API);
      alert("Backend Connected Successfully");
      console.log(response.data);
    } catch (error) {
      alert("Backend Connection Failed");
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1>Auction Bazaar</h1>

      <button onClick={connectBackend}>
        Connect Backend
      </button>
    </div>
  );
}

export default App;