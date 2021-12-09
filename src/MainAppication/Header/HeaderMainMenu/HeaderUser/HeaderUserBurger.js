import React from "react";
import {HeaderUser} from "./HeaderUser";
import {Cart} from "../../../Components/Icons/Cart";
import {CART} from "../../../../UrlsConst";
import {Notification} from "../../../Components/Icons/Notification";

export const HeaderUserBurger = (props) => {
    return(
        <div className="menu__first-block__burger" >
            <div className="menu__first-block__burger__button" onClick={props.onClickOnBtn}>
                <input
                    className="menu__first-block__burger__button__cheeckbox" id="burgerActivator" type="checkbox"/>
                    <div><span></span><span></span></div>
            </div>
            {props.burger &&
            <div className="menu__first-block__burger__block" id="burgerActive">
                <div className="menu__first-block__burger__block__icons">
                    <div className={""} onClick={props.onClick} onMouseLeave={props.onMouseLeave}
                         id="notification-activator">
                        <Notification notification={props.notification} />
                    </div>
                    <Cart href={CART}/>
                </div>
                <HeaderUser f={props.f} logOut={props.logOut} imgLink={props.imgLink} img={props.img ?? "#"} nameLink={props.nameLink} name={props.name}/>
            </div>}

        </div>
    );
};
