// Write react component to increase value by 5 while 
// clicking on button. Initialize value with 20. Use useReducer 
// hook to perform the task. 


// import { useReducer } from "react";
// const intialstate=20
// function reducer(state,action)
// {
//     if(action.type==="increment")
//     {
//         return state+5
//     }}
// function UR4()
// {
//     const[state,dispatch]=useReducer(reducer,intialstate)
//     return(
//         <>
//         <button onClick={()=>dispatch({type:"increment"})}>
//             Click Me {state}
//         </button>
//             </>
//     )

// }
// export default UR4





import { useReducer } from "react";
function reducer(state,action)
{
    return state + action
}
function UR4()
{
    const[state,dispatch]=useReducer(reducer,20)
    return(
        <>
        <button onClick={()=>dispatch(5)}>
            Click Me {state}
        </button>
            </>
    )

}
export default UR4