import React from 'react'
import './MenuItems.css'
import { Link } from 'react-router-dom'

export default function MenuItems() {
  return (
    <div>
        <div className='menu-items'>
        <Link to="/"><h5 className='menu-options'>Home</h5></Link>
        <Link to="/chatbot"><h5 className='menu-options'>Chatbot</h5></Link>
        <h5 className='menu-options'>Contact Us</h5>
        </div>
    </div>
  )
}
