import React, { useState, useEffect } from 'react'

const url = "https://randomuser.me/api/";
const err_url = "https://httpstat.us/400";

function Request() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "", 
    email: "",
    picture: {},
  })
  
  const fetchUser = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    const data_cleaned = data.results[0];
    setPerson({
      ...person,
      firstName: data_cleaned.name.first,
      lastName: data_cleaned.name.last,
      email: data_cleaned.email,
      picture: data_cleaned.picture,
    })
    setLoading(false);
  }

  useEffect(() => {
    fetchUser()
      .catch(error => {
        alert(error);
      })
  }, [])

  if (loading) {
    return(
      <div>loading...</div>
    )
  }

  return (
    <div>
      <h1>
        {person.firstName} {person.lastName}
      </h1> 
      <img src={person.picture.large} />
      <p>{person.email}</p>
      <button onClick={fetchUser}>Random</button>
    </div>
  )
}

export default Request

