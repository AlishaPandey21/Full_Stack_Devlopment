import ProductCart from './ProductCart.jsx'
import img1 from "./img1.jpeg"
import img2 from "./img2.jpeg"

function ProductList()
{
    const products=[{title:"iphone17 pro",price:"9999",rating:4.8,image:img1},
        {title:"samsung s26" , price:"9999",rating:4.2,image:img2},
        
    ];
    return(<div>
        <h2> Our Products</h2>
        <ProductCart ProductList={products}/>
        
    </div>
    )
}
export default ProductList;