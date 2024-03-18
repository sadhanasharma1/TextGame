import React , {useState} from 'react'
import './TextForm.css'
export default function TextForm(props) {
const handleUpClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText= text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to uppercase!", "success")
}

const handleDownClick = ()=>{
  // console.log("Lowercase was clicked" + text);
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to lowercase!", "success")
}

const handleReverse = ()=>{
  let newText = text.split(" ").reverse().join(" ");
  setText(newText);
  props.showAlert("Text has been reversed!", "success")
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}

const handleClear = ()=>{
  let newText = "";
  setText(newText);
  props.showAlert("Cleared successfully!", "success")
}

const handleCopy= ()=>{
  let txt = document.getElementById("myBox");
  txt.select();
  navigator.clipboard.writeText(txt.value);
  props.showAlert("Copied to clipboard!", "success")

}


const handleExtraSpaces=()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "));
  props.showAlert("Extra space has been removed!", "success")
}

const handleOnChange = (event)=>{
  // console.log("On Change");
  setText(event.target.value);
}



const[text,setText]= useState('Enter text here');
//text="new Text" : it is a wrong way to change the state
//correct way to chage the state :  by using setText function i.e setText("new text")

  return (
    <>
  {/* style={{backgroundColor:props.mode=='light'?'white':'grey' }}    in place of the below text color remove we can also add this style attribute*/} 
<div className={`container text-${props.mode==='light'?'dark':'light'}`}>
   <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey', color:props.mode==='dark'?'white':'black' }} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-dark mx-2 my-2 bg-dark" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-dark mx-2 my-2 bg-dark" onClick={handleDownClick}>Convert to Lowercase</button>
<button className="btn btn-dark mx-2 my-2 bg-dark" onClick={handleReverse}>Reverse Text</button>
<button type="submit" onClick={speak} className="btn btn-dark mx-2 my-2">Speak</button>
<button className="btn btn-dark mx-2 my-2 bg-dark" onClick={handleClear}>Clear Text</button>
<button className="btn btn-dark mx-2 my-2 bg-dark" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-dark mx-2 my-2 bg-dark" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>
<div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
  <h2>Your text summary</h2>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
  <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
  <h3>Preview</h3>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
</>
  )
}
