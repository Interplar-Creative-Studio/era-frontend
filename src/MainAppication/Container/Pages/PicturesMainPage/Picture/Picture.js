import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {Share} from "../../../../Components/Icons/Share";
import {SaveFolder} from "../../../../Components/Icons/SaveFolder/SaveFolder";
import {Like} from "../../../../Components/Icons/Like/Like";
import {UnderText} from "../../../../Components/Icons/UnderText";
import {LikeActive} from "../../../../Components/Icons/Like/LikeActive";
import {SaveFolderActive} from "../../../../Components/Icons/SaveFolder/SaveFolderActive";

export const Picture = (props) => {
    const [like, setLike] = useState(false);
    const [save, setSave] = useState(false);
    const onClickLike = () => { setLike(!like); };
    const onClickSave = () => { setSave(!save); };
    return (
        <div className="main__page__picture">
            <NavLink to={props.imgLink}><img src={props.img} alt={""}/>
                <div className="main__page__picture__hidden-info">
                    <div className="main__page__picture__hidden-info__more-button">
                        <MoreOptions color={"white"}/>
                    </div>
                    <div className="main__page__picture__hidden-info__settings-button">
                        <Share color={"white"}/>
                    </div>
                    <div className="main__page__picture__hidden-info__save-icon">
                        {save ?  <SaveFolderActive onClick={onClickSave}/> : <SaveFolder onClick={onClickSave} color={"white"}/> }
                    </div>
                    <div className="main__page__picture__hidden-info__like-icon">
                        {like ? <LikeActive color={"white"} onClick={onClickLike}/> : <Like color={"white"} onClick={onClickLike}/>}
                    </div>
                </div>

            </NavLink>
            <NavLink to={props.pictureNameLink}>
                <p>{props.pictureName}</p>
                <UnderText/>
            </NavLink>
        </div>
    );
};
