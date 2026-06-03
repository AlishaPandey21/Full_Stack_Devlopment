// 3. Write a program to build React app having a button which
// changes image by clicking it.


import React,{useState} from "react";
import img1 from "./assets/hero.png"
import img2 from "./assets/react.svg"


function Us3()
{
    const arr=[img1,img2,img3,img4,img5]
    const[myImage,setImage]=useState(arr[0])
    function changeImage()
    {
        if(myImage==img1)
        {
            setImage(img2)
        }
        else
        {
            setImage(img1)
        }


    
    }
    return(<div>
        
        <img src={myImage} height={200} width={200} alt="logo" />
        <button onClick={changeImage}>Change Image</button>
    </div>)
}
export default Us3