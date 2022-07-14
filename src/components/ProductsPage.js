import { useState } from 'react';
import jsonData from '/Users/sema/Documents/GitHub/lab-thinking-in-react/src/data.json';


function ProductsPage() {
    const [products, setProducts] = useState(jsonData);


    return (
        <div>
            <h1>IronStore</h1>
        </div>
    )
}

export default ProductsPage;