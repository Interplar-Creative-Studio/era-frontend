import React, {useState} from "react";
import {SaveFolderActive} from "../../../../Components/Icons/SaveFolder/SaveFolderActive";
import {SaveFolder} from "../../../../Components/Icons/SaveFolder/SaveFolder";
import {LikeActive} from "../../../../Components/Icons/Like/LikeActive";
import {Like} from "../../../../Components/Icons/Like/Like";
import {Share} from "../../../../Components/Icons/Share";
import {NavLink} from "react-router-dom";

export const PhotoModalTitle = (props) => {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const onClickLike = () => {
        setLike(!like);
    };
    const onClickSave = () => {
        setSave(!save);
    };
    return (
        <div className="photo-modal__title">
            <h1>Caption caption caption caption</h1>
            <div className="photo-modal__title__information">
                <div className="photo-modal__title__information__icons">
                    <div className="photo-modal__title__information__icons__like-icon">
                        {like ? <LikeActive color={"black"} onClick={onClickLike}/> :
                            <Like color={"black"} onClick={onClickLike}/>}
                    </div>

                    <div className="photo-modal__title__information__icons__save-icon">
                        {save ? <SaveFolderActive color={"black"} colorActive={"white"} onClick={onClickSave}/> :
                            <SaveFolder onClick={onClickSave} color={"black"}/>}
                    </div>

                    <div className="photo-modal__title__information__icons__settings-button">
                        <Share color={"black"}/>
                    </div>
                </div>
                <div className="photo-modal__title__information__button">
                    <NavLink to="#">Купить</NavLink>
                    <p>150р</p>
                </div>
            </div>
        </div>
    );
};
