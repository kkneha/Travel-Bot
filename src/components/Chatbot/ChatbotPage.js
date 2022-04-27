import React from 'react'
import ChatbotLeft from './ChatbotLeft'
import './ChatbotPage.css'
import ChatbotRight from './ChatbotRight'

export default function ChatbotPage() {
  return (
    <div className='chatbot-page'>
        <ChatbotLeft />
        <ChatbotRight />
    </div>
  )
}
