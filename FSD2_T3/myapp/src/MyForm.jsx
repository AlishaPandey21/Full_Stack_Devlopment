// import {useState} from 'react'
// function MyForm()
// {
//     const[name,setName]=useState("");
//     const[textarea,setTextarea]=useState("Content of TextArea")
//     

//     function handleSubmit(event)
//     {
//         event.preventDefault();
//         alert(`The Name You Entered Was: ${name}`)
//     }

//     function handleChange(event)
//     {
//         setTextarea(event.target.value)
//     }


//     return
//     (
//     <form onSubmit={handleSubmit}>

//          <label>Enter Your Name:</label>
//         <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
//         <label> Enter Your Message</label> 
//          <textarea value={textarea} onChange={handleChange}></textarea> 
//         
        
//         <input type='submit'></input>

//     </form>
//     )
// }
// export default MyForm











//General form:
import { useState } from "react";
function MyForm(){
    const [name,setName] = useState("");
    const [textarea,setTextarea] = useState("content of Textarea")
    const[MyCar,setMyCar]=useState("BMW")
    const[s,setSize]=useState("Medium")
    //for name button
    function handleSubmit(event){
        event.preventDefault();
        alert(`The name you entered was: ${name} textarea: ${textarea}`)
    }
    //for textarea button
    function handleChange(event){
        setTextarea(event.target.value)
    }

    
     function handleChange(event)
    {
        setMyCar(event.target.value)
    }

    function onOptionChange(e)
    {
            setSize(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label> Enter your Name </label>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
            <label> Enter Your Message </label>
            <textarea value={textarea} onChange={handleChange}></textarea><br></br>
            <br></br>
            <label>Select Your Car </label>
            <select value={MyCar} onChange={handleChange}>
            <option value="ford">Ford</option>
            <option value="BMW">BMW</option>
            <option value="Fiat">Fiat</option>
         </select>
            <br></br> <br></br>

            <input type="radio" name="ps" value="Regular" checked={s==='Regular'} onChange={onOptionChange} />
            <input type="radio" name="ps" value="Medium" checked={s==='Medium'} onChange={onOptionChange} />
            <input type="radio" name="ps" value="Large" checked={s==='Large'} onChange={onOptionChange} />
            <label>Regular</label>
            <p>Selected Pizza Size <strong>{s}</strong></p>
            <input type="submit"></input>
        </form>
    )
}
export default MyForm