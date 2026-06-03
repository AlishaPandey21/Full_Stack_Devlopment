// 9. Write react js app to perform the tasks as asked below.  
// •  Add two buttons and increment count by one with each 
// click. 
// •  Display alert as an effect on specified conditions.  
// o  Effect  will  be  triggered  only  when  page  rendered 
// for the 1st time. (empty array) 
// o  Effect  will  be  triggered every  time  the button A  is 
// clicked. (array with value) 
// o  When the Page is Rendered for the First Time and 
// On Every Update/Event Triggered

import { useState,useEffect } from "react";
function UE1()
{
    const[count,setCount]=useState(0)
    const[calculation,setcal]=useState(0)
    useEffect(()=>{alert("clicked")},[count])
    useEffect(()=>{alert("clicked")},[])
    useEffect(()=>{alert("clicked")})
   const changeCount=()=>{setCount(count+1)}
   const changeCalc=()=>{setcal(calculation+1)}
   return(<div>
    <button onClick={changeCount}>Button-A {count}</button>
    <button onClick={changeCalc}>Button-B {calculation}</button>

   </div>) 
};
export default UE1