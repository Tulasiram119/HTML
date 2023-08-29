import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
  const[text,setText] = useState(" ");
  const handleOnChange = (event)=>{
    console.log("On change is clicked");
    setText(event.target.value);
  }
  const handleUpOnClick = ()=>{
    console.log("Upper class is clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to upperCase!","success");
  }
  const handleLowOnClick = ()=>{
    console.log("Upper class is clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to lowerCase!","success")
  }
  const handleClearOnClick = ()=>{
    console.log("Upper class is clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared","success")
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are cleared!","success")
  }
  
  return (
  <>
    <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>      
        <div className="mb-3">
            <h1>{props.heading}</h1>            
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}}></textarea>
            <button className="btn btn-primary my-3 mx-2" onClick={handleUpOnClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLowOnClick}>Convert to Lowercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleClearOnClick}>Clear Text</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            
        </div>
    </div>
    <div className="container my-2" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length>1?text.split(" ").length-1:0} words, {text.length} charaters</p>
      <p>{0.0008*text.split(" ").length}Minutes needed to read</p>
      <h2>Preview</h2>
      <p>{text.length>1?text:"Enter some text above to preview"}</p>
    </div>
  </>
  )
}

