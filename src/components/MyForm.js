import React, { useState } from "react";

function MyForm() {
  const [userInput, setUserInput] = useState({
    userName: "",
    rememberMe: false,
    title: "Mr.",
    favouritePet: "",
  });

  const handleInput = (event) => {
    setUserInput((userInput) => ({
      ...userInput,
      [event.target.name]:
        event.target.name = "rememberMe"
          ? event.target.checked
          : event.target.value,
    }));
  };

  const handleTitle = (event) => {
    setUserInput((userInput) => ({ ...userInput, title: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        input = {userInput.userName} || {userInput.favouritePet}
      </div>
      <label>Enter Name</label>
      <input name="userName" onChange={handleInput} />
      <textarea name="favouritePet" onChange={handleInput}></textarea>
      <input
        name="rememberMe"
        type="checkbox"
        checked={userInput.rememberMe}
        onChange={handleInput}
      />
      <div>
        <select value={userInput.title} onChange={handleTitle}>
          <option>Mr.</option>
          <option>Miss.</option>
          <option>Mrs.</option>
        </select>
      </div>
      {userInput.rememberMe ? <div>Suck my dick</div> : null}
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
