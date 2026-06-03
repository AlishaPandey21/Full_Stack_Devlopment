function Myapp()
{
    let arr=[1,2,3,4,5,6,7,8,9,10]
    return(
        <>
        <div>
            <h3>Table</h3>
            {
                arr.map((value)=>
                    {if(value==3)
                        {
                            return null
                        }
                        else
                            {return <h2> 5*{value}={5*value}</h2>}
                    })
                
            }
        </div>

        </>
    )
}
export default Myapp