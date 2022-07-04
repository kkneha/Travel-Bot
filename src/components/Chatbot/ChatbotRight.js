import React, { useState } from 'react'
import './ChatbotRight.css'
import Chatbox from './Chatbox'


export default function ChatbotRight() {
  // var [data, updateData] = useState([]); 

  // const inputTextHandler = (enteredInputText) => {
  //   updateData(enteredInputText)
  //   console.log(enteredInputText)
  // }

  return (
    <div className='chatbot-main'>
        <Chatbox />
        {/* <InputBox onInputText={ inputTextHandler } /> */}
        {/* { data.map((data, index) => (<UserBubble key={index} text={ data } />))} */}
    </div>
  )
}
