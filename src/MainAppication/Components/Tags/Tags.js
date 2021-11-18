import React from "react";
import {TagElem} from "./TagElem/TagElem";

export const Tags = (props) => {
    return(
        <div className="menu__first-block__search-box__short__unit">
            <h3>{props.title}</h3>
            <div className="menu__first-block__search-box__short__unit__tags">
                {props.tags.map((tag, i) => <TagElem tagElem={tag} key={i}/>)}
            </div>
        </div>
    );
};
