import React from 'react'
import ChatbotPage from './components/Chatbot/ChatbotPage'
import HeaderBar from './components/Header/HeaderBar'
import HomePage from './components/Home/HomePage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
       <Router basename='/'>
       <HeaderBar />
        <Routes>
          <Route path='/' element={ <HomePage />}/>
          <Route path='/chatbot' element={ <ChatbotPage />}/>
        </Routes>
        </Router>
    </div>
  )
}