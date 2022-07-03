import React from "react";
import "./Chatbox.css";
import InputBox from "./InputBox";
import DropDown from "./DropDown";
import Bubble from "./Bubble";
import { useState } from "react";

export default function Chatbox() {
  var [dataArray, setDataArray] = useState([{ text: "Hi", cn: "bot-bubble", intent: "Null"}]);
  const inputTextHandler = (enteredInputText) => {
    setDataArray((oldDict) => [
      ...oldDict,
      { text: enteredInputText, cn: "user-bubble", intent: "Null"},
    ]);

    var post = { "chat-text": enteredInputText };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    };
    fetch("http://127.0.0.1:5000/api/chatbot/", requestOptions).then(
      async (response) => {
        const requestData = await response.json();
        setDataArray((oldDict) => [
          ...oldDict,
          { text: requestData["text"], cn: "bot-bubble", intent: requestData["intent"]}
        ]);
        console.log(dataArray); 
      }
    );
  };

  return (
    <div className='chatbox'>
      <InputBox onInputText={inputTextHandler} />
      {dataArray.map((value) => (
        <Bubble data={value.text} cn={value.cn} intent={value.intent}/>
        ))}
        {/* <DropDown /> */}
      
    </div>
  );
}
