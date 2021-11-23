import React from "react";
import {CartElem} from "./CartElement/CartElem";

export const Cart = (props) => {
    let cart = [
        {imgHref: "#", img: "assets/img/testImg2.png", title: "Лолля разозлись и всех убила", price: "240", parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi" },
    ];
    return (
        <div className="container">
            <div className="cart">
                <div className="cart__contents">
                    <h2>Корзина</h2>
                    {cart.map((elem, i)=><CartElem key={i} cart={elem}/>)}
                </div>
            </div>
        </div>
    );
};
