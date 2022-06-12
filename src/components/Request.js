import React, { useState, useEffect } from 'react'

const url = "https://randomuser.me/api/?results=5";
const err_url = "https://httpstat.us/400";

function Request() {
  const [loading, setLoading] = useState(true);
  const [people, setPeople] = useState([])
  
  const fetchUser = async () => {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();
    const data_cleaned = data.results;
    setPeople(data_cleaned)
    console.log(people)
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

  if (!people.length) {
    return (
      <div>no people...</div>
    )
  }

  return (
    <div>
      {/* <h1>
        {people.firstName} {people.lastName}
      </h1> 
      <img src={people.picture.large} />
      <p>{people.email}</p> */}
      <button onClick={fetchUser}>Random</button>
    </div>
  )
}

export default Request

