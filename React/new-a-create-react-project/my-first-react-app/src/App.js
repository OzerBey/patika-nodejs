import "./App.css";
// import Header from "./components/Header";
// import Dene from "./components/dene";
import User from "./components/User";
const name = "Yasin"; //dynamic data
const surname = "Ozer";
const isLoggedIn = false;
const friends = [
  [
    { name: "Yasin", surname: "Ozer", age: 20 },
    { name: "Ali", surname: "Atay", age: 21 },
    { name: "Khan", surname: "Chengiz", age: 22 },
    { name: "Deniz", surname: "Surmeli", age: 23 },
  ],
];

function App() {
  // return React.createElement("div", null, "heloo");
  return (
    <>
      <User
        name="Yasin"
        surname="Ozer"
        isLoggedIn={true}
        age={24}
        friends={friends}
      />

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
