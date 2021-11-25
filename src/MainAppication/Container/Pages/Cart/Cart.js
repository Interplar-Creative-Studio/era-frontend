import React, {useState} from "react";
import {CartElem} from "./CartElement/CartElem";
import {CartInformation} from "./CartInformation/CartInformation";

let cart = [
    {
        imgHref: "#",
        img: "assets/img/testImg2.png",
        title: "Лолля разозлись и всех убила",
        price: 240,
        parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi"
    },
    {
        imgHref: "#",
        img: "assets/img/testImg.png",
        title: "Тролли",
        price: 550,
        parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi"
    },
    {
        imgHref: "#",
        img: "assets/img/testImg3.png",
        title: "Мыши",
        price: 160,
        parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi"
    },
];

const sum = (cart) => {
    let sum = 0;
    for (const elem of cart) {
        sum += elem.price;
    }
    return sum;
};

const deleteElem = (arr, key) => {
    let tempArr = [];
    for (let i = 0, k = 0; i < arr.length; i++) {
        if (i !== key) {
            tempArr[k] = arr[i];
            k++;
        }
    }
    return tempArr;
};


export const Cart = (props) => {
    const [userCart, setUserCart] = useState(cart);
    console.log(userCart);
    const deleteBtnOnClick = (key) => {
        setUserCart(elem=>
            deleteElem(elem, key)
            
        );
    }
    return (
        <div className="container">
            <div className="cart">
                <div className="cart__contents">
                    <h2>Корзина</h2>
                    {userCart.map((elem, i) => <CartElem key={i} cart={elem} deleteBtnOnClick={()=>deleteBtnOnClick(i)}/>)}
                </div>
                <CartInformation product={userCart.length} price={sum(userCart)}/>
            </div>
        </div>
    );
};
