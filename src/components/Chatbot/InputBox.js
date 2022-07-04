import React, { useState } from "react";
import "./InputBox.css";



export default function InputBox({onInputText}) {
  var [inputText, setInputText] = useState("");
  var [data, setData] = useState([]);
  const [done,setDone] = useState(false)
  var [bot, setBot] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    // setData((oldArray) => [...oldArray, inputText]);
    // setInputText(inputText);
    // console.log(data)
    console.log(inputText)
    onInputText(inputText)
    setInputText("")
    // var post = {'chat-text':inputText}
    // const requestOptions = {
    //     method: "POST",
    //     headers: {"Content-Type":"application/json"},
    //     body: JSON.stringify(post)
    // }
    // fetch("http://127.0.0.1:5000/api/chatbot/", requestOptions).then(async response => {
    //     const data = await response.json()
    //     setDone(data)
    //     console.log(data)
    //     setDone(false)
    //     console.log("created")
    //     setBot(data)
    //     console.log(data)
    // })
  }

  return (
    <div>
     {/* <div id="main" className='input-div'>
        {data.map((data) => (
        <UserBubble data={data} />
        ))}
         </div>
        <BotBubble data={bot}/> */}
      <form className='input-form' onSubmit={handleSubmit}>
        <input
          id='input-text'
          className='input-text-box'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      {done}
    </div>
   
  );
}
