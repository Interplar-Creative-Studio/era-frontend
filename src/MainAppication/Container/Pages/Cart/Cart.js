import React from "react";
import {CartElem} from "./CartElement/CartElem";
import {CartInformation} from "./CartInformation/CartInformation";

let cart = [
    {imgHref: "#", img: "assets/img/testImg2.png", title: "Лолля разозлись и всех убила", price: 240, parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi" },
    {imgHref: "#", img: "assets/img/testImg.png", title: "Тролли", price: 550, parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi" },
    {imgHref: "#", img: "assets/img/testImg3.png", title: "Мыши", price: 160, parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi" },
];

const sum = (cart) => {
    let sum = 0;
    for (const elem of cart) {
        sum += elem.price;
    }
    return sum;
};
export const Cart = (props) => {

    return (
        <div className="container">
            <div className="cart">
                <div className="cart__contents">
                    <h2>Корзина</h2>
                    {cart.map((elem, i)=><CartElem key={i} cart={elem}/>)}
                </div>
                <CartInformation product={cart.length} price={sum(cart)}/>
            </div>
        </div>
    );
};
