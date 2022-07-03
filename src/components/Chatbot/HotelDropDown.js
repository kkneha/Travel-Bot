import React from "react";
import "./DropDown.css";
import { useState } from "react";
import Bubble from "./Bubble";

export default function HotelDropDown({text}) {
  var [star, setStar] = useState('null');
  var [out, setOutPut] = useState("");

  function handleHotelClick(e){
    e.preventDefault();
    setStar(e.target.value)
    console.log(star)
  }

  
  if(star!=="null")
  {
    var post = { "Star": star,
                 "intent": "h"};
    console.log(post)
    const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
    };
    fetch("http://127.0.0.1:5000/api/database/", requestOptions).then(
    async (response) => {
      var final_output = await response.json();
      setOutPut(final_output)
      console.log(final_output)
    }
    );
  }

  return (
     <div>
      <Bubble data={out} cn={"bot-bubble"} intent={"Null"}/>
      <form className="choice-form">
        <label className="label">Star</label>
        <button className="choice-button" value='1 star' onClick={handleHotelClick}>1 Star</button>
        <button className="choice-button" value='2 star' onClick={handleHotelClick}>2 Star</button>
        <button className="choice-button" value='3 star' onClick={handleHotelClick}>3 Star</button>
        <button className="choice-button" value='4 star' onClick={handleHotelClick}>4 Star</button>
        <button className="choice-button" value='5 star' onClick={handleHotelClick}>5 Star</button>
    </form>
      <Bubble data={text} cn={"bot-bubble"} intent={"Null"}/>
    </div>
  );
};
