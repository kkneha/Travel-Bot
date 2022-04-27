import React from 'react'
import './HeaderBar.css'
import LoginUtilities from './LoginUtilities'
import Logo from './Logo'
import MenuItems from './MenuItems'

export default function HeaderBar() {
  return (
    <div className='header-box'>
      <Logo/>
      <MenuItems/>
      <LoginUtilities/>
    </div>
  )
}
