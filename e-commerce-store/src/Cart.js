import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./style.css";
import { useNavigate } from "react-router-dom";



function Cart() {
    const {
        totalUniqueItems,
        items,
        removeItem,
    } = useCart();

    const navigate=useNavigate();
    function buy(){
        navigate('/buy')
    }
    
    return (
        <div className="screen">
            <section id="header">
                <h1 className="header"> E-Commerce Store </h1>
                <div id="cart">
                    <h5>{totalUniqueItems}</h5>
                    <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="cart" width='20px' /></Link>
                </div>
            </section>
            

            <ul>
                {items.map((item) => (
                    <li key={item.id} className="list">
                        <img src={item.img} alt="game" width="100px" />
                        <p>{item.gamename}</p>
                        <p>{item.price}</p>
                        <button className="buy" onClick={buy}>Buy</button>
                        <button className="remove" onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default Cart ;


