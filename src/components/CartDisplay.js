import React, {useState, useEffect} from 'react';

export default function CartDisplay(props) {

    const [carts, setCarts] = useState(props.cart)

    useEffect(()=> {
            setCarts(props.cart)
    })
    

    return (
        <div className="cart-display">
            <button className="X"onClick={props.closeCart}> X </button>
            <ul className="display-list">
                {carts.length < 1 && <h1> No Items yet </h1> }
                {carts.map((cartItem) => {
                    return <li className="display-list-item" key={props.key}>
                        <img src={cartItem.link}/>
                        <div className="list-info">
                            <h3> {cartItem.name} </h3>
                            <h5> {`Quantity: ${cartItem.quantity}`}</h5>
                            <h5> {`Total Cost: $${cartItem.quantity * +cartItem.price}`}</h5>
                            <div className="quantity-buttons">
                                <button onClick={()=>{props.editQuantity(cartItem.name, 1)}}> + </button>
                                <button onClick={()=>{props.editQuantity(cartItem.name, -1)}}> - </button>
                            </div>
                        </div>
                    </li>
                })}
            </ul>
            {carts.length > 0 && <button className="check-out-button"> Proceed To Checkout</button>}
        </div>
    );
}