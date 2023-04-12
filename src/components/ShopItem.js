import React from 'react';

export default function ShopItem(props) {


    function addCart() {
        props.addToCart(props.itemInfo);
    }

    return (
        <div className="shop-item">
            <img src={props.itemInfo.link} alt={props.itemInfo.name}/>
            <h3> {props.itemInfo.name} </h3>
            <h5> {`$${props.itemInfo.price}`} </h5>
            <button onClick={addCart} className="add-cart-button"> Add to Cart </button>
        </div>
    );
}