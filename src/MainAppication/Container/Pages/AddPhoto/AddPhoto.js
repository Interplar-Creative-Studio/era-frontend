import React from "react";
import {ElemsAddPhoto} from "./ElemsAddPhoto/ElemsAddPhoto";
import {AiOutlineClose} from "react-icons/all";
import {useQuery} from "../../../Components/functions/functions";
import {SettingsPhoto} from "./SettingsPhoto/SettingsPhoto";
import {NavLink} from "react-router-dom";
import {PICTURE_PAGE} from "../../../../UrlsConst";

export const AddPhoto = (props) => {
    let query = useQuery();
    let settings = query.get("settings");
    return (
        <div className="add-photo-modal">
            <div className="add-photo">
                <div className="add-photo__close-button">
                    <NavLink to={PICTURE_PAGE}>
                        <AiOutlineClose style={{transform: "scale(2, 2)"}}/>
                    </NavLink>
                </div>
                <ElemsAddPhoto/>
                <SettingsPhoto/>
            </div>
        </div>
    );
};


