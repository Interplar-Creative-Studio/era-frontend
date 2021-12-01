import React, {useState} from "react";
import {ExitPanel} from "../ExitPanel/ExitPanel";
import {User} from "../../../Components/User/User";

export const HeaderUser = (props) => {
    const [exitMenu, setExitMenu] = useState(false);
    const onMouseOverMenu = () => {
        setExitMenu(true);
    }
    return(
        <div className="menu__first-block__user-profile"
             onMouseLeave={() => setExitMenu(false)}
             onMouseOver={onMouseOverMenu}>
            <User imgLink={props.imgLink} img={props.img} nameLink={props.nameLink} name={props.name}/>
            {exitMenu && <ExitPanel onMouseOver={onMouseOverMenu} onMouseLeave={() => {setExitMenu(false)}}/>}
        </div>
    );
};
