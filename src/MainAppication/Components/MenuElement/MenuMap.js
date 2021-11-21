import React from "react";
import {MenuElement} from "./MenuElement/MenuElement";

export const MenuMap = (props) => {
    return (
        <>
            {props.arr.map((elem, i) => <MenuElement key={i} menulink={elem.href} menuName={elem.text}/>)}
        </>);
};
