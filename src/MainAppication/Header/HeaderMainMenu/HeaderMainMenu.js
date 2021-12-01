import React, {useState} from "react";
import {Search} from "./Search/Search";
import {NavLink} from "react-router-dom";
import {Notification} from "../../Components/Icons/Notification";
import {CART, PERSONAL, PERSONAL_GALLERY, PICTURE_PAGE} from "../../../UrlsConst";
import {Cart} from "../../Components/Icons/Cart";
import {connect} from "react-redux";
import {HeaderUser} from "./HeaderUser/HeaderUser";


export const HeaderMainMenu = (props) => {
    //let link = `${PERSONAL}?name=${PERSONAL_GALLERY}`;
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
            <HeaderUser imgLink={link} img={user?.profile_pic ?? "#"} nameLink={link} name={user?.username}/>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {user: state.auth.user,}
};

export default connect(mapStateToProps)(HeaderMainMenu);