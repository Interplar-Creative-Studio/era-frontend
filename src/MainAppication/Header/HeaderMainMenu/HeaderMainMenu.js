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
;


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
            <Notification amount={"1"} onClick={() => setNotification(true) } onMouseLeave={()=>setNotification(false)}
                          notification={notification} />

            <Cart href={CART}/>

            { user !== null ? <HeaderUser logOut={props.logOut} imgLink={link} img={user?.profile_pic ?? "#"} nameLink={link} name={user?.username}/>:
                <Button  className={"personal-area__settings__menu__button"} href={LOG_IN} text={"Войти"}/>
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