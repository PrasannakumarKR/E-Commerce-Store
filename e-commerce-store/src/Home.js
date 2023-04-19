import React from "react";
import Gamecard from "./Gamecard";
import './style.css';
import data from './data';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Home = () => {
    const {
        totalUniqueItems,
    } = useCart();
    return (
        <div className="screen">
            <section id="header">
                <h1 className="header"> E-Commerce Store </h1>
                <div id="cart">
                    <h5>{totalUniqueItems}</h5>
                    <Link to="cart"><img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="cart" width='20px' /></Link>
                </div>
            </section>
            <div className="scroll">
                {
                    data.gameData.map((game, index) => {
                        return (
                            <Gamecard img={game.img} gamename={game.gamename} about={game.about} details={game.details} reviews={game.reviews} price={game.price} id={game.id} key={index} />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Home;