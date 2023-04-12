import React, {useEffect, useState} from 'react';

export default function NavBar(props) {
    
    const [numItems, setNumItems] = useState(props.numItems);

    useEffect(()=>{

        if(props.numItems !== numItems) {
            setNumItems(props.numItems)
        }
    })
    

    return (
        <div className="navbar">
            <div className="navbar-left">
                <h1 data-testid="head"> MalWart </h1>
            </div>
            <div className="navbar-right">
                <img src={require("../images/icons8-shopping-cart-64.png")} alt="shopping cart icon" onClick={props.funct}/>
                <h2 data-testid="numItems">{numItems}</h2>
            </div>
        </div>
    );
}