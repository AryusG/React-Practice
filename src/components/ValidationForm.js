import React, { useState } from "react";

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: "",
}

function ValidationForm() {
  const [valid, setValid] = useState(true);
  const [userInput, setUserInput] = useState(initialState)

  const handleChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value,
    })
  };

  const isValid = () => {
    let nameError = "";
    let emailError =  "";
    let passwordError = "";

    if (!userInput.email.includes('@')) {
      emailError = "Not a valid email";
    }

    if (!userInput.name) {
      nameError = "Please enter a name" ;
    }

    if (!userInput.password) {
      passwordError = "Please enter your password";
    }

    if (nameError || emailError || passwordError) {
      setUserInput({
        ...userInput,
        nameError: nameError,
        emailError: emailError,
        passwordError: passwordError,
      })
      return false
    }

    return true; 
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValid()) {
      console.log(event)
      setUserInput(initialState);
    } 
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="name"
          value={userInput.name}
          onChange={handleChange}
        />
        <div style={{ fontSize: 13, color: "red"}}>
          {userInput.nameError}
        </div>
        <input
          name="email"
          placeholder="email"
          value={userInput.email}
          onChange={handleChange}
        />
        <div style={{ fontSize: 13, color: "red"}}>
          {userInput.emailError}
        </div>
        <input
          name="password"
          placeholder="password"
          value={userInput.password}
          onChange={handleChange}
        />
        <div style={{ fontSize: 13, color: "red"}}>
          {userInput.passwordError}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ValidationForm;
