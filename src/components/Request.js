import React, { useState, useEffect } from 'react'

const url = "https://randomuser.me/api/";
const err_url = "https://httpstat.us/400";

function Request() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState()

  const componentDidMount = async () => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
  }

  useEffect(() => {
    componentDidMount(); 
    
  }, [])

  return (
    <div>
      {loading ? <div>loading...</div> : <div>person...</div>}
    </div>
  )
}

export default Request

