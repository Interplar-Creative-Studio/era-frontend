import React, {useState} from "react";
import {Search} from "./Search/Search";
import {NavLink} from "react-router-dom";
import {Notification} from "../../Components/Icons/Notification";
import {CART, LOG_IN, PERSONAL_GALLERY, PICTURE_PAGE} from "../../../UrlsConst";
import {Cart} from "../../Components/Icons/Cart";
import {connect} from "react-redux";
import {HeaderUser} from "./HeaderUser/HeaderUser";
import {Button} from "../../Components/AuthorizationComponents/Button/Button";
import {logout} from "../../../store/actions/auth";
import {MdExitToApp} from "react-icons/all";

function f(){
    window.addEventListener('load', function (){
        const burgerActivator = document.getElementById('burgerActivator');
        const burgerActive = document.querySelector('.menu__first-block__burger__block');
        const toggleMenu = () => {
            burgerActive.classList.toggle('menu__first-block__burger__block-active');
        }
        burgerActivator.addEventListener('click', e => {
            e.stopPropagation();
            toggleMenu();
        });
        document.addEventListener('click', e => {
            let target = e.target;
            let its_menu = target === burgerActive || burgerActivator.contains(target);
            let its_hamburger = target === burgerActivator;
            let menu_is_active = burgerActive.classList.contains('menu__first-block__burger__block-active');
            if (!its_menu && !its_hamburger && menu_is_active) {
                toggleMenu();
                document.querySelector('.menu__first-block__burger__button__cheeckbox').checked = false;
            }
        })
    })
}

export const HeaderMainMenu = (props) => {
    let link = `${PERSONAL_GALLERY}`;
    const [notification, setNotification] = useState(false);
    let user = props.user;
    return(
        <div className="menu__first-block">
            <NavLink to={PICTURE_PAGE} className="menu__first-block__logo">
                <p>Era</p>
            </NavLink>
            <div className="menu__first-block__description">
                <p>Лента</p>
            </div>
            <Search/>
            {props.user !== null && window.innerWidth >540 &&
            <Notification amount={"1"} onClick={() => setNotification(true) } onMouseLeave={()=>setNotification(false)}
                          notification={notification} />}
            {props.user !== null &&
                <Cart href={CART}/>}

            { user !== null ? <HeaderUser f={f} logOut={props.logOut} imgLink={link} img={user?.profile_pic ?? "#"} nameLink={link} name={user?.username}/>:
                <Button text={<MdExitToApp/>} style={{transform: "scale(3, 3)", marginTop:"15px", height: '20px', width:'20px'}} href={LOG_IN} />
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {user: state.auth.user,}
};
const mapDispatchToProps = {
    logOut: logout,
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderMainMenu);