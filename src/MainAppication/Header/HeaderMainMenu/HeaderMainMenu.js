import React from "react";
import {Search} from "./Search/Search";

export const HeaderMainMenu = () => {
    //TODO:: выяснить куда ведет тег <a>
    return(
        <div className="menu__first-block">
            <a className="menu__first-block__logo">
                <p>Era</p>
            </a>
            <div className="menu__first-block__description">
                <p>Лента</p>
            </div>
            <Search/>
        </div>
    );
};
