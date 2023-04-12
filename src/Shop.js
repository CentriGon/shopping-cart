import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import ShopItem from './components/ShopItem';
import CartDisplay from './components/CartDisplay';

export default function Shop(props) {

    const [carts, setCarts] = useState(props.cart)
    const [force, setForce] = useState(props.force)
    const [isCartDisplay, setIsCartDisplay] = useState(props.CartDisplay);

    useEffect(()=> {
        setCarts(props.cart)
        setIsCartDisplay(props.display)
    })

    function createProduct(name, link, price, key) {
        return {
            name,
            link,
            price,
            key,
            quantity: 1,
        }
    }
    
    let products = [];
    products[0] = createProduct("Shooter", "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRgaJdqm21NUz3LtW4odFq-5LLUq0KQcOJJyrQuBk1NMrbfSU_e-fR77uFaCXE9TFcJvLTVlP0iDwNlFZ7L3iTfnvN6MQaRibv34dzDHtp_q5d0iWFSC25BGA&usqp=CAE", "39.99", "active-shooter");
    products[1] = createProduct("Autistic Virgin", "https://i.etsystatic.com/25959038/r/il/d2e5e0/4389698454/il_1588xN.4389698454_esg3.jpg", "35.99", "aut-virg")
    products[2] = createProduct("Paused My Game", "https://m.media-amazon.com/images/I/61xaDvBO+5S._AC_UY879_.jpg", "29.99", "paused-game")
    products[3] = createProduct("Cheetos Shirt", "https://m.media-amazon.com/images/I/71BnqTCnBRL.__AC_SY445_SX342_QL70_FMwebp_.jpg", "49.99", "cheetos-shirt")
    products[4] = createProduct("Never Forget", "https://i.etsystatic.com/6914268/r/il/e53183/4683632649/il_1588xN.4683632649_m3yi.jpg", "9.11", "never-forget")

    let prodImages = []
    return (
        <div className="Shop">
            {isCartDisplay && <CartDisplay cart={props.cart} closeCart={props.displayFunct} editQuantity={props.editQuantity}/>}
            <div className="item-grid">
                {products.map((item) => {
                    return <ShopItem itemInfo={item} addToCart={props.addToCart}/>
                })}
            </div>
        </div>
    );
}