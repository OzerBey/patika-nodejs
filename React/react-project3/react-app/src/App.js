import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("Yasin"); //Yasin is a default value for name useState
  const [age, setAge] = useState(24); //20 is a default value for age useState
  useEffect(() => {
    console.log("The state updated");
  });
  if (true) {
    console.log("Hi There");
  }
  //we can use one or more useEffect to run code on component mount and unmount
  useEffect(() => {
    console.log("Component Mounted", []); //[] is a default value for dependency arrays
  });

  return (
    <div className="App">
      <h1>
        {name} is {age}
        <button
          style={{
            marginLeft: "10px",
            color: "white",
            backgroundColor: "black",
          }}
          onClick={() => {
            setAge(age + 1);
          }}
        >
          {" "}
          Click
        </button>
      </h1>
    </div>
  );
}

export default App;
/*
This app contains demo application for React.

*/
