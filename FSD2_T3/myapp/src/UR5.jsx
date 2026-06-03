// 5. Create  react  jsx  app  to  increase  value  by  1  while  clicking 
// on  button  “Increment” and decrease value by 1 while 
// clicking on button “Decrement”. Initialize value with 0. Use 
// useReducer hook to perform the task.

import { useReducer } from "react";
const intialstate=0
function reducer(state,action)
{
    if(action.type==="increment")
    {
        return state+1
    }

    
    if(action.type==="decrement")
    {
        return state-1
    }

}
function UR5()
{
    const[state,dispatch]=useReducer(reducer,intialstate)
    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:"increment"})}>
            Increment
        </button>
        <button onClick={()=>dispatch({type:"decrement"})}>
            decrement 
        </button>
            </>
    )

}
export default UR5