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
    let isValid = true;
    let nameError = "";
    let emailError =  "";
    let passwordError = "";

    if (!userInput.email.includes('@')) {
      // console.log("email incorrect");
      emailError = "Not a valid email";
      setUserInput({...userInput, emailError: emailError })
      isValid = false;
    }

    if (!userInput.name) {
      // console.log("name not entered")
      nameError = "Please enter a name" ;
      setUserInput({...userInput, nameError: nameError})
      isValid = false;
    }

    if (!userInput.password) {
      // console.log("enter password");
      passwordError = "Please enter your password";
      setUserInput({...userInput, passwordError: passwordError});
      isValid = false;
    }
    return isValid;
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInput.nameError)
    console.log(userInput.emailError)
    console.log(userInput.passwordError)
    
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
        <div style={{ fontSize: 14, color: "red"}}>
          {userInput.nameError}
        </div>
        <input
          name="email"
          placeholder="email"
          value={userInput.email}
          onChange={handleChange}
        />
        <div style={{ fontSize: 14, color: "red"}}>
          {userInput.emailError}
        </div>
        <input
          name="password"
          placeholder="password"
          value={userInput.password}
          onChange={handleChange}
        />
        <div style={{ fontSize: 14, color: "red"}}>
          {userInput.passwordError}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ValidationForm;
