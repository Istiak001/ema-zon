import React from 'react';

const Product = (props) => {
    // console.log(props.product); 
    const {category, name, seller, wholePrice, price, shipping, stock, img} = props.product;
    return (
        <div className='row border my-4 py-4'>
            <div className="col-lg-6">
                <img src={img} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-6">
                <p><strong>Name: </strong>{name}</p>
                <p><strong>By: </strong>{seller}</p>
                <p><strong>Shipping: </strong> {shipping}</p>
                <p><strong>WholePrice: </strong>{wholePrice}</p>
                <p>Only<strong> {stock} </strong>PCS in our stock.</p>
                <p><strong>Price: </strong>{price}</p>
                <button className="btn-danger">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Product;