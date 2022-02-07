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
      <hr></hr> <br></br>
      <h2 style={{ color: "red" }}>Friends</h2>
      {friends.map((friend, index) => (
        <h3 key={index}>
          {index + 1}. {friend}
        </h3>
      ))}
      {/* //to add new item to end of the array */}
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => setFriends([...friends, "new User"])}
      >
        Add Friend end
      </button>
      {/* //to add new item to begin of the array */}
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() => setFriends(["new User", ...friends])}
      >
        Add Friend to start
      </button>
    </div>
  );
}

export default App;
