import { useReducer } from "react";
const intialstate=0
function reducer(state,action)
{
    if(action.type==="increment")
    {
        return state+1
    }}
function UR()
{
    const[state,dispatch]=useReducer(reducer,intialstate)
    return(
        <>
        <button onClick={()=>dispatch({type:"increment"})}>
            Click Me {state}
        </button>
            </>
    )

}
export default UR