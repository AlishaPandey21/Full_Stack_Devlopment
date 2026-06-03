// Create a program to build React app having buttons to increment
// and decrement the number by clicking that respective button.
// Also, increment of the number should be performed only if
// number is less than 10 and decrement of the number should be
// performed if number is greater than 0.
import React,{useState} from "react";



function Us2()
{
    const[count,setCount]=useState(0)
    function handleCount()
    {
        setCount(count+1)

    

    {
        if(count==10)
        {
            return alert("Count Cannot be More than 10")
           
        }
        else
        {
             setCount(count+1)
        }
    }
}
  function handleCount1()
    {
        setCount(count+1)

    

    {
        if(count==0)
        {
            alert("Count cannot be less then 0 ")
        }
        else
        {
            setCount(count-1)
        }
    }
}

    return(
        <div>
            <p>You Clicked{count} times</p>
            <button onClick={handleCount}>Click Me for increment</button>
            <button onClick={handleCount1}>Click Me for Decrement</button>

        </div>
    )
}

export default Us2