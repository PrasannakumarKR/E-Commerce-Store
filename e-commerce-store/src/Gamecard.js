import React from "react";
import './style.css';
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

const Gamecard = (props) => {
    const { addItem } = useCart();

    const navigate=useNavigate();
    function buy(){
        navigate('/buy')
    }
    return (

        <div className="container">
            <section className="top">
                <div className="img"><img src={props.img} alt="game" width='100%' height='100%' /></div>
                <div className="content">
                    <h2>{props.gamename}</h2>
                    <p>{props.about}</p>
                    <div id="buttons">
                    <button className="button" onClick={buy}>Buy Now<p>({props.price})</p></button>
                        <button className="carts" onClick={() => addItem(props)}>Add to cart</button>
                    </div>
                </div>
            </section>
            <section className="bottom">
                <div className="details">
                    <h4>More Details</h4>
                    <p>{props.details}</p>
                </div>
                <div className="review">
                    <h4>Reviews</h4>
                    <p>{props.reviews}</p>
                </div>
            </section>
        </div>
    );


};

export default Gamecard;
