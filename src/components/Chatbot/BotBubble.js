import React from 'react'
import './BotBubble.css'

export default function BotBubble(data) {
  console.log("In Bot bubble"+ data.data)
  return (
    <div className='bot-container'>
      <div className='bot-bubble'>
        <p className='bot-text'>{data.data}</p>
      </div>
    </div>
  )
}
