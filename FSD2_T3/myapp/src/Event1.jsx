// 1. Write react js script to display alert box with text “Welcome to
// LJU” by clicking on button. (on double click)


function Event1()
{
    function handleclick()
    {
        alert('Welcome to LJU')
    }
    return(
        <div>
            <center>
                <button onDoubleClick={handleclick}>Click Me</button>
            </center>
        </div>
    )
}
export default Event1