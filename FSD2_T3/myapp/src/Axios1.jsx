import {useState,useEffect} from 'react'
import axios from "axios"

const Randomjokeapi=()=>
{
    const[joke,setJoke]=useState("");

    function fetchjoke()
    {
        axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((response)=>
        {
            console.log(response.data)
            setJoke(response.data)
        })
        .catch((error)=>{console.error(error);})
    }
    useEffect(fetchjoke,[])

    return(<div>
        <h1>
            {joke.setup}
        </h1>
        <h3>
            {joke.punchline}
        </h3>
        <button onClick={fetchjoke}>Generate Joke</button>
    </div>)
}
export default Randomjokeapi