import React, {useEffect, useState} from "react";
import {User} from "../../../../Components/User/User";
import {Views} from "../../../../Components/Icons/Views";
import {FilledLike} from "../../../../Components/Icons/FilledLike";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {NavLink} from "react-router-dom";
import {PICTURE_PAGE} from "../../../../../UrlsConst";
import {AiOutlineClose} from "react-icons/all";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";

export const ViewPhotoHeader = (props) => {
    const [user, userSet] = useState({});
    let picture = props.picture;
    useEffect(()=>{
        let url = `${process.env.REACT_APP_API_URL}/api/user/shortinfo/${picture?.owner ?? 0}`;
        fetchGet(userSet, url);
    },[picture?.owner]);
    let date = new Date(picture?.created_at);
    return(
        <div className="photo-modal__header">
            <div className="photo-modal__header__user-profile">
                <User name={user?.username} img={`${process.env.REACT_APP_API_URL}${user?.profile_pic}`}/>
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
                        <p>Published<span>{date.getDay()}.{date.getMonth()}.{date.getFullYear()}</span></p>
                    </div>
                </div>
                    <MoreOptions/>
                <div className="photo-modal__header__information__close-button">
                        <AiOutlineClose style={{transform: "scale(3, 3)", marginTop: "-20px"}} onClick={props.onClick}/>
                </div>
            </div>
        </div>
    );
};
