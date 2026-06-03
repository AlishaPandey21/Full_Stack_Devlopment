// 6. Create a component to perform the tasks as described below:
// 1. Add a text field and a submit button.
// - While changing the value in the text field, display it below the form.
// - Display this text field value in an alert box upon submitting it.
// 2. Add a button to perform click and double-click event tasks.
// - On click event, display message in h3 tag “You clicked once”.
// - On double-click event, display message in h3 tag “You clicked twice”.
// - Message should be displayed below the button

function Event1()
{
    function handleclick1()
    {
        alert('You Clicked Twice')
    }
    return(
        <div>
            <center>
                <button onDoubleClick={handleclick1}>Click Me</button>
            </center>
        </div>
    )

    function handleSubmit(e)
    {
        e.preventDefault()
        alert('You Clicked Submit')
    }
    return(
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name"></input>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    )

     function handleclick()
    {
        alert('You Clicked Once')
    }
    return(
        <div>
            <center>
                <button onClick={handleclick}>Click Me</button>
            </center>
        </div>
    )

}