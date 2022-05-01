import { useState, useEffect } from "react";

function Counter() {
  const [name, setName] = useState("Yasin"); //Yasin is a default value for name useState
  const [age, setAge] = useState(24); //20 is a default value for age useState
  useEffect(() => {
    console.log("The age state updated");
  }, [age]); //useEffect is called when age is changed
  if (true) {
    console.log("Hi There");
  }
  //we can use one or more useEffect to run code on component mount and unmount
  useEffect(() => {
    console.log("Component Mounted", []); //[] is a default value for dependency arrays
    //this dependency array is empty because we are not using any dependency
  });
  useEffect(() => {
    console.log("The name state updated", [name]);
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
        <hr />
        <button
          style={{ color: "white", backgroundColor: "green" }}
          onClick={() => {
            setName("Ozer");
          }}
        >
          Change name
        </button>
        <button
          style={{ color: "white", backgroundColor: "red", marginLeft: "5px" }}
          onClick={() => {
            setName("Yasin");
          }}
        >
          {" "}
          set default name
        </button>
      </h1>
    </div>
  );
}

export default Counter;
