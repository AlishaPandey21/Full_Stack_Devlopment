import { useState,useEffect } from "react";
import axios from "axios"

const Randomimage=()=>
{
    const[myimg,settimg]=useState("")
    useEffect(()=>{
        setInterval(()=>
        {
            axios
            //.get('https://dog.ceo/api/breeds/image/random')
            .get('https://trace.moe/?url=https://raw.githubusercontent.com/soruly/trace.moe/master/demo.jpg')

            .then((response)=>{ console.log(response.data);
            settimg(response.data);})
            .catch((error)=>{console.error(error)})

        },2000)
    },[])
    return(<div>
        <img src={myimg.message} height={300} width={300} />
    </div>
    )
}
export default Randomimage