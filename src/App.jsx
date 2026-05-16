import axios from "axios";
import "./App.css";

const API =
  "https://online-auction-platform-fh47.onrender.com/api/test";

function App() {

  const connectBackend = async () => {

    try {

      const response = await axios.get(API);

      alert(response.data);

    } catch (error) {

      console.log(error);

      alert("Backend Connection Failed");
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