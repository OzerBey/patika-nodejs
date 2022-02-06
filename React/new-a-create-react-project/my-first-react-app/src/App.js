import "./App.css";
import Header from "./components/Header";
import Dene from "./components/dene";

function App() {
  // return React.createElement("div", null, "heloo");
  return (
    <div>
      <h1>Hello React</h1>
      <Header />
      <Dene />
      <label htmlFor="name">Name:</label>
      <p id="nameOfP" className="pTag">
        <input id="name"></input>
        This is a paragraph
      </p>
    </div>
  );
}

export default App;
