import React, {useState} from 'react'

export default function About() {

    const[myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor: 'white'
    })

    const[btnText, setBtnText] = useState("Enable Dark Mode");

    const toggleStyle=()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor: 'white'  
            })
            setBtnText("Enable Dark Mode")
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor: 'black',
                border: '1px solid white'  

            }) 
            setBtnText("Enable Light Mode")
        }
    }
  return (
    <div className="container" style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Introduction
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Welcome to the TextGame!</strong> At TextGame, we're passionate about making text manipulation and analysis accessible to everyone. This application provides a simple yet powerful interface where users can easily convert text between uppercase and lowercase, listen to the text using advanced speech synthesis technology, and even reverse the text for creative experimentation.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Our Mission
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Our mission is to empower users with tools that enhance their text processing experience. Whether you're a student working on an assignment, a professional crafting documents, or simply someone who loves playing with words, TextGame is designed to be your go-to tool for all things text-related.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Our users
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Our users are just loving this application. Join us on this journey of exploration and discovery, and let your words come to life like never before!
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={toggleStyle} type="button" className="btn btn-dark">{btnText}</button>
</div>
    </div>
  )
}
