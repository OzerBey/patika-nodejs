import "./App.css";
import Header from "./components/Header";
import Dene from "./components/dene";
import User from "./components/User";
const name = "Yasin"; //dynamic data
const surname = "Ozer";
const isLoggedIn = false;
function App() {
  // return React.createElement("div", null, "heloo");
  return (
    <>
      <User name={name} surname={surname} isLoggedIn={true} age={24} />

      {/* <> :fragment */}
      {/* <h1>Hello React</h1>
      <Header />
      <label htmlFor="name">Name:</label>
      <p id="nameOfP" className="pTag">
        <input id="name"></input>
        This is a paragraph
      </p> */}
    </>
  );
}

export default App;
