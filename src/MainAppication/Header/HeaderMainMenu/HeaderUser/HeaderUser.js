import React, {useState} from "react";
import {ExitPanel} from "../ExitPanel/ExitPanel";
import {User} from "../../../Components/User/User";

export const HeaderUser = (props) => {
    const [exitMenu, setExitMenu] = useState(false);
/*    const onMouseOverMenu = () => {
        setExitMenu(true);
    }*/
    const onClick= () =>{
        setExitMenu(!exitMenu);
    }
    return(
        <div onClick={onClick}>
        <div className="menu__first-block__burger__block__user-profile menu__first-block__user-profile"
             >
            <User imgLink={"#"} img={props.img} nameLink={"#"} name={props.name}/>
            {exitMenu && <ExitPanel logOut={props.logOut}/>}
        </div>
            </div>
    );
};
