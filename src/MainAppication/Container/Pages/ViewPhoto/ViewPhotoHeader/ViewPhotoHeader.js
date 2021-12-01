import React from "react";
import {User} from "../../../../Components/User/User";
import {Views} from "../../../../Components/Icons/Views";
import {FilledLike} from "../../../../Components/Icons/FilledLike";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {NavLink} from "react-router-dom";
import {PICTURE_PAGE} from "../../../../../UrlsConst";
import {AiOutlineClose} from "react-icons/all";

export const ViewPhotoHeader = (props) => {
    return(
        <div className="photo-modal__header">
            <div className="photo-modal__header__user-profile">
                <User name={"Top Waifu"} img={"assets/img/ProfileLogo.png"}/>
            </div>
            <div className="photo-modal__header__information">
                <div className="photo-modal__header__information__stats">
                    <div className="photo-modal__header__information__stats__counter">
                        <div className="photo-modal__header__information__stats__counter__views">
                            <Views/>
                            <p>125</p>
                        </div>
                        <div className="photo-modal__header__information__stats__counter__likes">
                            <FilledLike/>
                            <p>125</p>
                        </div>
                    </div>
                    <div className="photo-modal__header__information__stats__date">
                        <p>Published<span>10.11.21</span></p>
                    </div>
                </div>
                    <MoreOptions/>
                <div className="photo-modal__header__information__close-button">
                    <NavLink to={PICTURE_PAGE}>
                        <AiOutlineClose style={{transform: "scale(3, 3)", marginTop: "-20px"}} onClick={props.onClick}/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};
