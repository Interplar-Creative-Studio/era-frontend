import React from "react";
import {NavLink} from "react-router-dom";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {Share} from "../../../../Components/Icons/Share";
import {SaveFolder} from "../../../../Components/Icons/SaveFolder";
import {Like} from "../../../../Components/Icons/Like";
import {UnderText} from "../../../../Components/Icons/UnderText";

export const Picture = (props) => {
    return(
        <div className="main__page__picture">
            <NavLink to={props.imgLink}><img src={props.img} alt={""}/>
                <div className="main__page__picture__hidden-info">
                    <MoreOptions color={"white"}/>
                    <Share color={"white"}/>
                    <SaveFolder color={"white"}/>
                    <Like color={"white"}/>
                </div>
            </NavLink>
            <NavLink to={props.pictureNameLink}>
            <p>{props.pictureName}</p>
          <UnderText/>
        </NavLink>
        </div>
    );
};
