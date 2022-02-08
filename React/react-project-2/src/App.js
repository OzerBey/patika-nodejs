import { useState } from "react";
function App() {
  const [name, setName] = useState("Yasin"); //useState is a hook and it takes a value as an default value
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Yasin", "Ozer", "Ahmed"]);
  const [address, setAddress] = useState({
    street: "Halitpaşa",
    city: "Istanbul",
    zipCode: 34197,
  });

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
      {/* address defination */}
      <hr></hr>
      <h2 style={{ color: "red" }}>Address</h2>
      <div>
        <h3>Street: {address.street}</h3>
        <h3>City: {address.city}</h3>
        <h3>Zip Code: {address.zipCode}</h3>
      </div>
      {/* //manipulation to the object */}
      <button
        style={{ backgroundColor: "green", color: "white" }}
        onClick={() =>
          setAddress({ ...address, street: "Yıldız", zipCode: 34000 })
        }
      >
        Change The Address
      </button>
    </div>
  );
}

export default App;
