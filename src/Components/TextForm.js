import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLowClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value);
   
    }
    const handleCopy = () => {
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.Select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState('Enter text here');
   
  return (
      <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}> 
    
        
        <h1>{props.heading}</h1> 
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2"onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2"onClick={handleLowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2"onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
    <div className="container my-2" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in textbox above to preview it here"}</p>
    </div>
    </>
  )
}
