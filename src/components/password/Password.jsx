import React, { useState } from "react";
import "./password.css";
import { useNavigate } from "react-router-dom";

function Password() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    setInputValue(inputValue);
    //console.log(inputValue);
    if (inputValue.toLowerCase() === "password") {
      //console.log("WOO HOO");
      navigate("/captcha");
    } else {
      //console.log("Nope");
      alert("Wrong Password >:(");
    }
  };

  const change = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="input_password container">
      <div className="input">
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
    </div>
  );
}

export default Password;
