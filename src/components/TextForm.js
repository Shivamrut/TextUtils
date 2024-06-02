import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter your text here: ");

  const handleText = (event)=>{
    setText(event.target.value)
  }

  const handleClickUpper = ()=>{
    let newText = text
    setText(newText.toUpperCase())
  }
  const handleClickLower = ()=>{
    let newText = text
    setText(newText.toLowerCase())
  }
  const handleClickDollar = ()=>{
    let newText = text.split("").map((i)=> i+="$").join("")
    setText(newText)
  }

  return (
    <>
      <h3>{props.heading}</h3>

      <div className="form-group">
        <label htmlFor="myTextarea">Form:</label>
        <textarea className="form-control" id="myTextarea" rows="8" value={text} onChange={handleText}></textarea>
      </div>
      <button className="btn btn-primary m-2" onClick={handleClickUpper}>Upper Case</button>

      <button className="btn btn-primary m-2" onClick={handleClickLower}>Lower Case</button>

      <button className="btn btn-primary m-2" onClick={handleClickDollar}>Dollarise</button>
    </>
  );
}
