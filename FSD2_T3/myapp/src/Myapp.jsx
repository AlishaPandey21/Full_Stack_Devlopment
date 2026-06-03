// 1. Write a JSX program in React to demonstrate all important JSX rules.
// The program should include:
// • Use of a single parent element or Fragment
// • JavaScript expression inside JSX using { }
// • Inline CSS styling using camelCase properties
// • External CSS using className
// • JSX comments
// • Ordered list display
// • Self-closing tags
// • Display of images from both assets and public folders
// The program should display a welcome message using a variable, a list of
// fruits, styled text, and images using JSX syntax


import img from "./assets/logo.png"
import "./My.css"
function Myapp()
{
 

    const mystyle={color:"blue"}
  return(
    <>
   
    <p className="para">abc</p>
     <img src="logo1.png" width="200px" height="100px"/>
      <img src={img} width="200"/>
    <li>Apple</li>
    <input type="submit"/>
    <h1>{name}</h1>
    <h1 style={{color:"red",backgroundColor:"blue"}}>Heading</h1>   
     <h1 style={mystyle}>Heading1</h1> 
     {/*Single Line Comment*/}
     {/*
     Multiline Comment*/}   </>
)}
export default Myapp
