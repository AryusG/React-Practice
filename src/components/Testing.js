import React, { useState, useEffect } from 'react';

const MyForm = () => {
  const [state, setState] = useState({
    name: "Jerry",
    age: 3,
  }); 

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [page, setPage] = useState("Home");

  const changeName = (event) => {
    setState(state.name = event);
  }
  
  const windowChange = () => {
    setWindowWidth(window.innerWidth)
  }

  const handleAlert = () => {
    alert("\tHi\t\n\tthis aint good\t")
  }

  useEffect(() => {
    window.addEventListener('resize', windowChange);
    console.log("useEffect called");

    return () => {
      window.addEventListener('resize', windowChange);
    }
  }, [])
  
  return (
    <div>
      <div>{windowWidth}</div>
      <button onClick={() => setPage("Home")}>Home</button>
      <button onClick={() => setPage("Info")}>Info</button>
      <button onClick={() => setPage("Contact")}>Contact</button>
      <div>{page}</div>
      <div>{state.name}{state.age}</div>
      <input onChange={changeName}/>
      <div>
        <button onClick={handleAlert}>Alert Message</button>

      </div>
    </div>
  );
}

export default MyForm;