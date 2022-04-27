import React, { useState } from "react";
import BotBubble from "./BotBubble";
import "./InputBox.css";
import UserBubble from "./UserBubble";

export default function InputBox() {
  var [inputText, setInputText] = useState("");
  var [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setData((oldArray) => [...oldArray, inputText]);
    setInputText("");
    console.log(data);
  }

  return (
    <div>
     <div id="main" className='input-div'>
        {data.map((data) => (
        <UserBubble data={data} />
        ))}
         </div>

      <form className='input-form' onSubmit={handleSubmit}>
        <input
          id='input-text'
          className='input-text-box'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
    </div>
   
  );
}
