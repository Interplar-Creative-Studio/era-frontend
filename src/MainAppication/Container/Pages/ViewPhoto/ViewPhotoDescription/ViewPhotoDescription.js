import React from "react";
import {MenuElement} from "../../../../Components/MenuElement/MenuElement/MenuElement";

export const ViewPhotoDescription = (props) => {

    let picture = props.picture;
    return (
        <div className="photo-modal__description">
            <div className="photo-modal__description__text-block">
                <h2>Описание фото</h2>
                <p>{picture?.description}</p>
            </div>
            <div className="photo-modal__description__hashtags">
                <h2>Хештеги</h2>
                <ul>
                    {picture?.tag.map((elem, i) => <MenuElement key={i} onClick={elem.onClick}
                                                               menulink={elem.href ?? "#"} menuName={elem.tag}/>)}
                </ul>
            </div>
        </div>
    );
};
