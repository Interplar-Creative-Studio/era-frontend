import React, {useState} from "react";
import {Search} from "./Search/Search";
import {NavLink} from "react-router-dom";
import {Notification} from "../../Components/Icons/Notification";
import {User} from "../../Components/User/User";
import {PERSONAL, PERSONAL_GALLERY, PICTURE_PAGE} from "../../../UrlsConst";
import {Cart} from "../../Components/Icons/Cart";


export const HeaderMainMenu = () => {
    let link = `${PERSONAL}?name=${PERSONAL_GALLERY}`;
    const [notification, setNotification] = useState(false);

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
                          notification={notification}/>
            <Cart/>
            <User imgLink={link} img={"assets/img/ProfileLogo.png"} nameLink={link} name={"Top Waifu"}/>
        </div>
    );
};
