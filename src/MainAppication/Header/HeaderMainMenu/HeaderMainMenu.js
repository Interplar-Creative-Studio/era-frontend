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
import {ButtonHeader} from "./ButtonHeader/ButtonHeader";
import {MdExitToApp} from "react-icons/all";



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
            {props.user !== null &&
            <Notification amount={"1"} onClick={() => setNotification(true) } onMouseLeave={()=>setNotification(false)}
                          notification={notification} />}
            {props.user !== null &&
                <Cart href={CART}/>}

            { user !== null ? <HeaderUser logOut={props.logOut} imgLink={link} img={user?.profile_pic ?? "#"} nameLink={link} name={user?.username}/>:
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