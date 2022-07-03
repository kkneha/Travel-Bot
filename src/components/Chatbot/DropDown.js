import React from "react";
import "./DropDown.css";
import { useState } from "react";
import Bubble from "./Bubble";

export default function DropDown({text}) {
  var [budget, setBudget] = useState('null');
  var [type, setType] = useState('null');
  var [group, setGroup] = useState('null');
  var [out, setOutPut] = useState([]);
  var count = 0
  function handleBudgetClick(e){
    e.preventDefault();
    setBudget(e.target.value)
    console.log(budget)
  }

  function handleTypeClick(e){
    e.preventDefault();
    setType(e.target.value)
    console.log(type)
  }

  
  function handleGroupClick(e){
    e.preventDefault();
    setGroup(e.target.value)
    // count = 1
  }


  if(budget!=="null" & type!=="null" & group!=="null")
  {
    var post = { "Budget": budget,
                 "Type": type,
                 "intent": "i" };
    console.log(post)
    const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(post),
    };
    fetch("http://127.0.0.1:5000/api/database/", requestOptions).then(
    async (response) => {
      var final_output = await response.json();
      // final_output = final_output.split("\\n").join("\n")
      setOutPut(final_output)
      console.log(final_output)
    }
    );
  }

  return (
     <div>
      <Bubble data={out} cn={"bot-bubble"} intent={"Null"}/>
      <form className="choice-form">
        <label className="label">Budget</label>
        <button className="choice-button" value='Moderate ' onClick={handleBudgetClick}>Moderate</button>
        <button className="choice-button" value='High' onClick={handleBudgetClick}>High</button>
        <button className="choice-button" value='Low' onClick={handleBudgetClick}>Low</button>

        <label className="label">Type</label>
        <button className="choice-button" value='Adventure' onClick={handleTypeClick}>Adventure</button>
        <button className="choice-button" value='Sightseeing' onClick={handleTypeClick}>Sightseeing</button>
        <button className="choice-button" value='Historic' onClick={handleTypeClick}>Historic</button>

        <label className="label">Group</label>
        <button className="choice-button" value='friends' onClick={handleGroupClick}>Friends</button>
        <button className="choice-button" value='family' onClick={handleGroupClick}>Family</button>
      </form>
      <Bubble data={text} cn={"bot-bubble"} intent={"Null"}/>
    </div>
  );
};
