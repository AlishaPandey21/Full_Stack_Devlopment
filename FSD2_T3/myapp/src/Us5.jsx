// 5. Write a program to build React app to perform the tasks as asked
// below.
// • Add three buttons “Change Text”, “Change Color”,
// “Hide/Show”.
// • Add heading “LJ University” in red color(initial) and also add
// “React Js Hooks” text in h2 tag.
// • By clicking on “Change text” button text should be changed to
// “Welcome students” and vice versa.
// • By clicking on “Change Color” button change color of text to
// “blue” and vice versa. This color change should be performed
// while double clicking on the button.
// • Initially button text should be “Hide”. While clicking on it the
// button text should be changed to “Show” and text “React Js
// Hooks” will not be shown.


import {useState} from 'react'
function Us5(){
    const [name,setName]=useState('LJ University')
    const [textColor,setColor]=useState('Red')
    const [hideText,setHide]=useState('React JS Hooks')
    const [buttonText,setButtonText]=useState('Hide')

    function showhide(){
        if(buttonText=='Hide'){
            setButtonText('show')
            setHide('')
        }
        else{
            setButtonText('Hide');
            setHide('React JS Hooks')
        }
    }

    function changeName(){
        if(name==='LJ University'){
            setName('welcome student')
        }
        else{
            setName('LJ University')
        }
    }
    function changeColor(){
        if(textColor==='Red'){
            setColor('Blue')
        }
        else{
            setColor('Red')
        }
    }
    return(
    <div>
        <button onClick={changeName}>Change Text</button>
        <button onDoubleClick={changeColor}>Change Color</button>
        <button onClick={showhide}>{buttonText}</button>
      
      <h1 style={{color:textColor}}>{name}</h1>
      <h2>{hideText}</h2>

    </div>)
}
export default Us5