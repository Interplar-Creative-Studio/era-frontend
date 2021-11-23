import React from "react";

export const CartInformation = (props)=>{
    return(
        <div className="cart__inf">
            <ul>
                <li>
                    <h3>Всего</h3>
                </li>
                <li>
                    <p>{props.product} продукта</p>
                </li>
                <li>
                    <h3>{props.price}р</h3>
                </li>
            </ul>
            <a href="#">Оплатить</a>
        </div>
    );
};
