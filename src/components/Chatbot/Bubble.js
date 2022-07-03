import React, { useState } from 'react'
import './Bubble.css'
import DropDown from './DropDown'
import HotelDropDown from './HotelDropDown'

export default function Bubble({data, cn, intent}) {
  console.log("data " + data + " cn " + cn + " intent " + intent)
  var [flag, setFlag] = useState(intent)

  // setFlag(intent)
  const displayBubble = () => {
    return (
      <div className={cn}>
        <div className='text'>{data}</div>
      </div>
     )
  }

  const displayDropdown = () => {
    console.log(flag)
    // {flag === "Iterarnary" ? <DropDown text={data} /> : <HotelDropDown text={data} />}
    if(flag==="Iterarnary") 
    {
      return (
      <DropDown text={data}/>
    )
   }
    else if(flag==="Hotel")
    {
      return(
        <HotelDropDown text={data}/>
      )
    }
  }

  return (
    <div className='container'>
      {intent === "Null" ? displayBubble() : displayDropdown() }
    </div>
  )
}
