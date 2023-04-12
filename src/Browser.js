import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from './App';
import Shop from './Shop';
import './style.css'
import {useState, useEffect} from 'react'
import NavBar from './components/NavBar';

export default function Router() {

    const [force, setForce] = useState(0);
    const [cart, setCart] = useState([]);
    const [cartDisplay, setCartDisplay] = useState(false);

    function changeQuantityButton(itemName, action) {
        cart.forEach((val, index) => {
            if (val.name == itemName) {
                changeQuantity(action, index)
            }
        })
    }

    function displayCart() {
        setCartDisplay(!cartDisplay)
    }

    function changeCart(itemToAdd) {
        let shouldAdd = true;
        cart.forEach((item, index) => {
            if (item.name == itemToAdd.name) {
                changeQuantity(1, index);
                shouldAdd = false;
            }
        })

        if (shouldAdd) {
            setCart(cart.concat(itemToAdd));
        }
    }

    function changeQuantity(action, index) {
                const tempCart = cart;
                if ((tempCart[index].quantity > 0 && action < 0) || (action > 0)) {
                    tempCart[index].quantity += action;
                }
                setCart(tempCart)
                setForce(force+1);
    }

    useEffect(()=>{ 
        cart.forEach((item, index) => {
            if (item.quantity == 0) {
                removeItem(index)
            }
        })
    })

    function removeItem(index) {
        const tempCart = cart;
        tempCart.splice(index, index+1)
        setCart(tempCart)
        setForce(force+1);
    }

    return (
        <BrowserRouter>
            <NavBar numItems={cart.length} funct={displayCart}/>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Shop" element={<Shop editQuantity={changeQuantityButton} addToCart={changeCart} cart={cart} force={force} display={cartDisplay} displayFunct={displayCart}/>} />
            </Routes> 
        </BrowserRouter>
    );
}