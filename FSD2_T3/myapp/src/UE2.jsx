// Write  a  ReactJS  script  to  create  a  digital clock  running  continuously. (useEffect) \

import { useState,useEffect } from "react";

function UE2()
{
    const[date,setDate]=useState(new Date());

    useEffect(()=>{
    const timer=setInterval(()=>{setDate(new Date())

    },1000);},[])


return (<h1>Time using LocaltimeString : {date.toLocaleTimeString()}
<br/><br/>
Hour- {date.getHours()} : Min- {date.getMinutes()}: sec- { date.getSeconds()}
</h1>)
}

export default UE2