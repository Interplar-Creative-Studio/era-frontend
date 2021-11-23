import React from "react";
import {Question} from "../../../../Components/Icons/Question";
import {Delete} from "../../../../Components/Icons/Delete";
import {NavLink} from "react-router-dom";

export const CartElem = (props) => {
    let cart = props.cart;
    return (
        <div className="cart__contents__unit">
            <NavLink to={cart.imgHref ?? "#"}>
                <img alt={""} src={cart.img}/>
            </NavLink>
            <div className="cart__contents__unit__description">
                <h3>{cart.title}</h3>
                <p>{cart.parameters}</p>
                <div className="cart__contents__unit__description__license">
                    <span>Basic License</span>
                    <Question/>
                </div>
                <p>Фотография доступна для комерческого использования.</p>
                    <Delete background={"white"} color={"black"}/>
            </div>
            <div className="cart__contents__unit__price">
                <p>{cart.price}p</p>
            </div>
        </div>
    );
};
