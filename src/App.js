import React, { useState } from 'react'
import "./index.css"

function App() {
  const [data,setData]=useState("Ali")
  function updateData()
  {
    setData("Hafiz Ali Salman")
  }
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </div>
  )
}

export default App;
