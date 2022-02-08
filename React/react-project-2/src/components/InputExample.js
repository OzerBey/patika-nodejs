import { useState } from "react";

function InputExample() {
  const [form, setForm] = useState({ name: "", surname: "" }); //useState is a hook and it takes a value as an default value

  const onChangeInput = (e) => {
    console.log(e.target.name);
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      Please enter a name: <br></br>
      <input
        name="name"
        placeholder="Enter Name"
        value={form.name}
        onChange={onChangeInput}
      />
      <br></br>
      Please enter a surname: <br></br>
      <input
        name="surname"
        placeholder="Enter Surname"
        value={form.surname}
        onChange={onChangeInput}
      />
      <br></br>
      <br></br>
      {form.name} {form.surname}
    </div>
  );
}

export default InputExample;
