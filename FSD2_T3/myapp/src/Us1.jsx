// 1. Write a program to build React app having a button which
// increase count by 1 while clicking it
import React,{useState} from 'react'

function Us1()
{
    const[count,setCount]=useState(0)
    function handleCount()
    {
        setCount(count+1)

    

    {
        if(count<10)
        {
            setCount(count+1)
        }
        else
        {
            return alert("Count Cannot be More than 10")
        }
    }
}

    return(
        <div>
            <p>You Clicked{count} times</p>
            <button onClick={handleCount}>Click Me</button>
        </div>
    )
}
export default Us1