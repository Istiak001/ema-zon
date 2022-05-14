import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [Products, setProducts] = useState([]);

    useEffect( () => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="product-container col-lg-8">
                        {
                            Products.map(product => <Product 
                            key={product.key}
                            product={product}
                            >
                            </Product>)
                        }
                    </div>
                    <div className="cart-container col-lg-4">
                        <Cart></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;