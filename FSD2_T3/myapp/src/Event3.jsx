// . (Example of onchange event )Write react js script to display
// values in console while changing it in text box

function Event1()
{
    function handlechange(event)
    {
        console.log(event.target.value)
    }
    return(
        <div>
            <center>
                Enter Your Name:
                <input type="text" name="firstName" onChange={handlechange} />

                
            </center>
        </div>
    )
}
export default Event1