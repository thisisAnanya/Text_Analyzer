import React, {useState} from 'react'

export default function Text(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
     let newText = text.toUpperCase()
     setText(newText)
     props.showAlert("Converted to Uppercase", "Success")
  }
  const handleLoClick = () => {
    //console.log("lower case was clicked");
     let newText = text.toLowerCase()
     setText(newText)
     props.showAlert("Converted to Lowercase", "Success")
  }
  const handleClearClick = () => {
    //console.log("Text is cleaned");
     let newText = ""
     setText(newText)
     props.showAlert("Text Cleared", "Success")
  }
  const handleCopyClick = () => {
    //console.log("Text is cleaned");
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied", "Success")
    }

  const handleSentenceClick = () => {
    //console.log("Text is cleaned");
     let newText = text.toLowerCase().split('. ').map(sentence => {
       return sentence.charAt(0).toUpperCase() + sentence.slice(1);
     }).join('. ');
     setText(newText)
      props.showAlert("Converted to Sentence case", "Success")
  }
  const handleTitleClick = () => {
    //console.log("Text is cleaned");
     let newText = text.toLowerCase().split(' ').map(word => {
       return word.charAt(0).toUpperCase() + word.slice(1);
     }).join(' '); 
     setText(newText)
      props.showAlert("Converted to Title case", "Success")
  }

  function handleOnChange(event) {
    //console.log("On Change");
    setText(event.target.value); 
  }

  const [text, setText] = useState(""); 
  //setText("new text here");
  return (
    <>
      <div className={`container my-3 border border-${props.mode === 'light' ? 'dark' : 'light'}`}>
      <div className={`container text-${props.mode=== 'light' ? 'dark' :'light'}`}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className={`form-control border border-${props.mode === 'light' ? 'dark' : 'light'}`}
        value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'light' ? 'white' :'#042743', color: props.mode=== 'light' ? 'black' :'white'}} id="myBox" rows="11"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPER CASE</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
      <button className="btn btn-primary mx-2" onClick={handleSentenceClick}>Sentence case</button>
      <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Title case</button>

      </div>
      <div className={`container  my-3 text-${props.mode=== 'light' ? 'dark' :'light'} text-center `}  >
        <h3>Text Summary</h3>
        <h1>{text.split(" ").length} Words and {text.length} Character</h1>
        <p>{0.008* text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
      </div>
      
    </>
  ) 
}
