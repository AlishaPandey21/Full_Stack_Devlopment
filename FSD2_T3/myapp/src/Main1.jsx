import { createContext } from "react";
import Comp from './Comp'
const Fname=createContext();
function Main1()
{
    return (
        <Fname.Provider value='ABC'>
            <Comp/>

        </Fname.Provider>
    )
}
export default Main1
export{Fname}

