import "./App.css";
import Flip from "./Flip";
import photos from "./photos.js";


const title = "Let's flip a coin!"
function App() {

  return (
    <div className="App">
      <Flip photos={photos} title={title} />
    </div>
  );
}

export default App;
