import React from "react";

export const CartInformation = (props)=>{
    let words = ['продукт', 'продукта', 'продуктов'];
    return(
        <div className="cart__inf">
            <ul>
                <li>
                    <h3>Всего</h3>
                </li>
                <li>
                    <p>{props.product} {nameOfProduct(props.product, words)}</p>
                </li>
                <li>
                    <h3>{props.price}р</h3>
                </li>
            </ul>
            <a href="#">Оплатить</a>
        </div>
    );
};


function nameOfProduct(value, words){
    value = Math.abs(value) % 100;
    let num = value % 10;
    if(value > 10 && value < 20) return words[2];
    if(num > 1 && num < 5) return words[1];
    if(num === 1) return words[0];
    return words[2];
}