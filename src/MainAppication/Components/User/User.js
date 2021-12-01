import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {ExitPanel} from "../../Header/HeaderMainMenu/ExitPanel/ExitPanel";

export const User = (props) => {
    const [exitMenu, setExitMenu] = useState(false);
    const onMouseOverMenu = () => {
        setExitMenu(true);
    }
    return (
        <div className="menu__first-block__user-profile"
             onMouseLeave={() => setExitMenu(false)}
             onMouseOver={onMouseOverMenu}>

            <NavLink to={props.imgLink}>
                <img src={props.img} alt={""}/>
            </NavLink>
            <NavLink to={props.nameLink}>
                <p>{props.name}</p>
            </NavLink>
            {exitMenu && <ExitPanel onMouseOver={onMouseOverMenu} onMouseLeave={() => {setExitMenu(false)}}/>}
        </div>
    );
};
