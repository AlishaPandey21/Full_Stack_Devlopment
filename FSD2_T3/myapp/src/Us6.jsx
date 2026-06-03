// 6. Create a React component that manages multiple form input
// fields using a single state object and displays the values in real-
// time
import {useState} from 'react'
function Us6()
{
    const[data,setdata]=useState({})
    function handleChange(e)
    {
        const{name,value}=e.target
        setdata({...data,[name]:value});

    }
    return(
        <div>
            <input type="text" name="firstName" onChange={handleChange} />
            <div>
                <input type="text" name="lastName" onChange={handleChange} />
            </div>
            <h1>First Name: {data.firstName} Last Name:{data.lastName}</h1>
        </div>
    )
}
export default Us6