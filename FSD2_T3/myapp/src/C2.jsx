import { useContext } from "react";
import {Fname,Lname} from "./PC"

function C2()
{
    const fn=useContext(Fname)
    const Ln=useContext(Lname);
    return(
        <h1>
            Welcome {fn} {Ln}
        </h1>
    )
}
export default C2
