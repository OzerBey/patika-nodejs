import { useState } from "react";

function App() {
  const [name, setName] = useState("Yasin"); //useState is a hook and it takes a value as an default value
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Yasin", "Ozer", "Ahmed"]);

  return (
    <div className="App">
      <h1>
        Hello {name} ({age})
      </h1>
      <button
        style={{ color: "white", backgroundColor: "red" }}
        onClick={() => {
          setAge(30);
          setName("Ozer");
        }}
      >
        Change Name
      </button>
      <button
        style={{ color: "white", backgroundColor: "green" }}
        onClick={() => {
          setAge(24);
          setName("Yasin");
        }}
      >
        Reset The Values
      </button>
      <hr></hr> <hr></hr>
      <h2 style={{ color: "red" }}>Friends</h2>
      {friends.map((friend, index) => (
        <h3 key={index}>
          {index + 1}. {friend}
        </h3>
      ))}
    </div>
  );
}

export default App;
