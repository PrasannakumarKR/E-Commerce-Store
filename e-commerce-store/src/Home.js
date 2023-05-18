import React, { useEffect, useState } from "react";
import axios from "axios";
import Gamecard from "./Gamecard";
import './style.css';
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const Home = () => {
    const [data, setData] = useState([]);
  const fetchData = () => {
   axios(`http://localhost:1337/api/Games`)
      .then(data => { setData(data.data.data); })
  }

  useEffect(() => {
    fetchData()
  },[]);

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
                    data.map((game, index) => {
                        return (
                            <Gamecard img={game.attributes.image} gamename={game.attributes.name} about={game.attributes.about} details={game.attributes.details} reviews={game.attributes.rating} price={game.attributes.price} id={game.id} key={index} />
                        )
                    })
                }
            </div>

        </div>
    );
};

export default Home;