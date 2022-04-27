import React, { useState } from 'react'
import BotBubble from './BotBubble'
import './ChatbotRight.css'
import InputBox from './InputBox'
import UserBubble from './UserBubble'

export default function ChatbotRight() {
  // var [data, updateData] = useState([]); 

  // const inputTextHandler = (enteredInputText) => {
  //   updateData(enteredInputText)
  //   console.log(enteredInputText)
  // }

  return (
    <div className='chatbot-main'>
        <InputBox />
        {/* <InputBox onInputText={ inputTextHandler } /> */}
        {/* { data.map((data, index) => (<UserBubble key={index} text={ data } />))} */}
    </div>
  )
}
