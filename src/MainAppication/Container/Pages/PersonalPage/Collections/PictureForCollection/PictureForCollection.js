import React from "react";
import {NavLink} from "react-router-dom";
import {COLLECTIONS} from "../../../../../../UrlsConst";

export const PictureForCollection = (props) => {
    let collection = props.collection;
    return(
        <div className="personal-area__galery__unit" onClick={props.onClick}>
            <NavLink to={COLLECTIONS}>
                <img alt={""} src={`${process.env.REACT_APP_API_URL}${collection?.cover}`}/>
            </NavLink>
            <div className="personal-area__galery__unit__description">
                <p>{collection?.description}</p>
            </div>
        </div>
    );
};
