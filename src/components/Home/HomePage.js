import React from 'react'
import HomeButton from './HomeButton'
import './HomePage.css'
import HomeText from './HomeText'

export default function HomePage() {
  return (
    <div className='home-main'>
       <HomeText />
       <HomeButton />
    </div>
  )
}
