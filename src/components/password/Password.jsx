import React, { useState } from "react";
import "./password.css";
import { useNavigate } from "react-router-dom";
import Home from "../home/Home";

function Password() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate()

  const submit = (e) => {
    setInputValue(inputValue);
    //console.log(inputValue);
     if (inputValue === "password") {
       console.log("WOO HOO");
       navigate('/home')
     } else {
       //console.log("Nope");
       alert("Wrong Password >:(")
     }
  };

  const change = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <div className="input_password">
      <h1>Input Password</h1>
      <h3>Don't have one? Ask the bride if you're even invited lol</h3>

      <input
        className="input_bar"
        onChange={change}
        type="text"
        value={inputValue}
      />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Password;
