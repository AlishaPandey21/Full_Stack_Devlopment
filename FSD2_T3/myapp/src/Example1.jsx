// 4. Create a React application using props to pass an object from one
// component to another component.
// Requirements:
// 1. Create a parent component Example1.jsx.
// 2. Create an object named Details containing:
// o Student_name
// o University_name
// 3. Pass the Details object to child component Example.jsx using props.
// 4. In child component:
// o receive the object using props
// o display student name and university name in browser
import Example2 from "./Example2.jsx"
function Example1()
{
    return(
        <div>
            <Example2 sname="ABC" uniname="LJ"  />
            <Example2 sname="PQR" uniname="Nirma" />
            <Example2 sname="XYZ" uniname="DAIICT" />


        </div>
    )
}
export default Example1