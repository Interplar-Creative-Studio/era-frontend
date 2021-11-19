import React from "react";
import {NavLink} from "react-router-dom";
import {ThreeDots} from "../../../../Components/Icons/ThreeDots";
import {Share} from "../../../../Components/Icons/Share";
import {SaveFolder} from "../../../../Components/Icons/SaveFolder";
import {Like} from "../../../../Components/Icons/Like";
import {UnderText} from "../../../../Components/Icons/UnderText";

//assets/img/testImg2.png
export const Picture = (props) => {
    return(
        <div className="main__page__picture">
            <NavLink to={props.imgLink}><img src={props.img} alt={""}/>
                <div className="main__page__picture__hidden-info">
                    <ThreeDots/>
                    <Share/>
                    <SaveFolder/>
                    <Like/>
                </div>
            </NavLink>
            <NavLink to={props.pictureNameLink}>
            <p>{props.pictureName}</p>
          <UnderText/>
        </NavLink>
        </div>
    );
};
