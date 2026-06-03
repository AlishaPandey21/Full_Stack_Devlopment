// 4. Write React component having a button and image. By clicking
// on button, image changes randomly from a given array of images.

import React,{useState} from "react";
import img1 from "./assets/hero.png"
import img2 from "./assets/react.svg"
import img3 from "./assets/img3.jpg"
import img4 from "./assets/img4.jpg"
import img5 from "./assets/img5.jpg"

function Us3()
{
    const arr=[img1,img2,img3,img4,img5]
    const[myImage,setImage]=useState(arr[0])
    function changeImage()
    {
    


        const randomIndex=Math.floor(Math.random()*arr.length)
        setImage(arr[randomIndex])
    }
    return(<div>
        <h1>Random Image Generator</h1>
        <img src={myImage} height={200} width={200} alt="logo" />
        <button onClick={changeImage}>Change Image</button>
    </div>)
}
export default Us3