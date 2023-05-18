
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [name,setName] = useState();


  return (
    <div>
      <p>Enter your name:</p><br/><br/>
       <input type="text" onChange={(e) => setName(e.target.value) } />

       <p>Hello {name}!</p>
    </div>
  )
}

export default App
