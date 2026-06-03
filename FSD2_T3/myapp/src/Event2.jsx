// 2. Write react js script to display alert box with text “You clicked submit.” only on submitting form.
function Event1()
{
    function handleSubmit(e)
    {
        e.preventDefault()
        alert('You Clicked Submit')
    }
    return(
        <div>
            <center>
                <form onSubmit={handleSubmit}>
                    <button type="submit">Submit</button>
                </form>
            </center>
        </div>
    )
}
export default Event1