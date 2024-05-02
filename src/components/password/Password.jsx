import React, { useState } from "react";
import './password.css'


function Password() {
  const [inputValue, setInputValue] = useState('');

  const submit = (e) => {
    setInputValue(inputValue)
    console.log(inputValue)
  }
  
  const change =(e) =>{
    setInputValue(e.target.value);
  }

  return (
    <div className="input_password">
      <h1>Input Password</h1>
      <h3>Don't have one? Ask the bride if you're even invited lol</h3>
      <input onChange={change} type="text" value={inputValue} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Password;
