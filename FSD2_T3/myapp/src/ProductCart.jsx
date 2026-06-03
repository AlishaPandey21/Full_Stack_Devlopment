function ProductCart(props)
{
    return(<>
    {
    props.ProductList.map((product,index)=>
    (<div>
        <img src={product.image} width="25%"/>
        <h2>{product.title}</h2>
        <p> Price:{product.price}</p>
        <p>rating:{product.rating}</p>        </div>
        ))}

    </>
    )
}
export default ProductCart