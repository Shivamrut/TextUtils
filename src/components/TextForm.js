import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [preText, setPretext] = useState("");

  const handleText = (event) => {
    let newtext = event.target.value;
    setPretext(newtext);
    setText(newtext);
  };

  const handleClickUpper = () => {
    let newText = text;
    setText(newText.toUpperCase());
  };
  const handleClickLower = () => {
    let newText = text;
    setText(newText.toLowerCase());
  };
  const handleClickDollar = () => {
    let newText = text
      .split("")
      .map((i) => (i += "$"))
      .join("");
    setText(newText);
  };

  const handleClickConfirm = () => {
    setPretext(text)
  };

  return (
    <>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="form-group">
          <textarea
            className="form-control"
            id="myTextarea"
            rows="8"
            value={preText}
            onChange={handleText}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleClickUpper}>
          Upper Case
        </button>

        <button className="btn btn-primary m-2" onClick={handleClickLower}>
          Lower Case
        </button>

        <button
          className="btn btn-primary m-2"
          onClick={handleClickDollar}
          disabled="true"
        >
          Dollarise
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Summary:</h3>
        <p>
          {text !== "" ? text.split(" ").length : 0} words and {text.length}{" "}
          characters <br></br> {text !== "" ? (text.split(" ").length / 150).toFixed(2) : 0} minutes
          read
        </p>
       
        <h3>Preview:</h3>
        <p>{text}</p>
        <button className="btn btn-primary m-2" onClick={handleClickConfirm}>
          Confirm
        </button>
      </div>
    </>
  );
}
