import React, { useState } from "react";

export default function TextForm(props) {
  const showAlert = props.showAlert
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
    // showAlert("Converted to Upper Case!","success")
  };
  const handleClickLower = () => {
    let newText = text;
    setText(newText.toLowerCase());
    // showAlert("Converted to Lower Case!","success")
  };
  const handleClickDollar = () => {
    let newText = text
      .split("")
      .map((i) => (i += "$"))
      .join("");
    setText(newText);
    // showAlert("Converted to Dollar Case!","success")
  };

  const handleClickConfirm = () => {
    setPretext(text);
    // showAlert("Applied Changes!","success")
  };
  const handleClear = () => {
    setPretext("");
    setText("");
    // showAlert("Cleared Text!","success")
  };

  const handleCopy = async ()=>{
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API not supported');
      }
      await navigator.clipboard.writeText(text);
      document.getSelection().removeAllRanges()
      showAlert("Copied to Clipboard!","success")
    } catch (err) {
      console.error('Failed to copy text:', err);
    } 
  }

  return (
    <>
      <div className="container" >
        <h3>{props.heading}</h3>
        <div className="form-group">
          <textarea
            className="form-control"
            id="myTextarea"
            rows="8"
            value={preText}
            onChange={handleText}
            style={{
              backgroundColor : props.mode==="dark"? "#313c3f": "#f2fafc",
              color : props.mode==="light"? "#31363F": "white"
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary m-2" onClick={handleClickUpper}>
          Upper Case
        </button>

        <button disabled={text.length===0}  className="btn btn-primary m-2" onClick={handleClickLower}>
          Lower Case
        </button>
        <button disabled={text.length===0}  className="btn btn-primary m-2" onClick={handleCopy}>
          Copy Text
        </button>

        <button
        
          className="btn btn-primary m-2"
          onClick={handleClickDollar}
          disabled={true}
        >
          Dollarise
        </button>
        <button disabled={text.length===0}  className="btn btn-danger m-2" onClick={handleClear}>
        
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Summary:</h3>
        <p>
          {text.split(/\s+/).filter(x => x!=="").length} words and {text.length + " "}
           characters <br></br>
          {(text.split(/\s+/).filter(x => x!=="").length / 150).toFixed(2) } minutes
          read
        </p>

        <h3>Preview:</h3>
        <p>{text.length>0? text : "Nothing to preview!"}</p>
        <button disabled={preText.length===0} className="btn btn-primary" onClick={handleClickConfirm}>
          Confirm
        </button>
      </div>
    </>
  );
}
