import React, {useState} from "react";
import {CartElem} from "./CartElement/CartElem";
import {CartInformation} from "./CartInformation/CartInformation";

let cart = [
    {
        imgHref: "#",
        img: "https://chudo-udo.info/media/k2/items/cache/46b48ff5dea1e8c04bc5a53cc4723d74_XL.jpg",
        title: "Лолля разозлись и всех убила",
        price: 240,
        parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi"
    },
    {
        imgHref: "#",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6TeDtfXT2M85H4dkykueYhzUx1ZfsA0VFsA&usqp=CAU",
        title: "Тролли",
        price: 550,
        parameters: "3000 x 2000px / 25.4 x 16.93cm @300dpi"
    },
    {
        imgHref: "#",
        img: "https://obojki.ru/uploads/posts/2020-11/1604296270_gory-les-ozero-leto-utro.jpg",
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
