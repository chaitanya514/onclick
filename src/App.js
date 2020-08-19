import React, { useState } from 'react';

import './App.css';

function App() {
  const [name, setName] = useState({
    firstName: "",
    lastName: ""
  })

  const [submit, setSubmit] = useState([])


  const handleChange = (event) => {
    setName({
      ...name,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
let firstName =name.firstName;
let lastName = name.lastName;
    event.preventDefault();
    setSubmit([
      ...submit,
      firstName,
      lastName
    ])
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>First Name  </label> <input type="text" name="firstName" onChange={handleChange} /><br />
      <label>Last Name  </label> <input type="text" name="lastName" onChange={handleChange} onKeyPress={handleSubmit} />
        <button type="submit" >Submit</button>

  {submit}
  
      </form>
    </div>
  );
}

export default App;
