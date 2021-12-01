import React, {useState} from "react";
import {LeftArrow} from "../../../../Components/Icons/Arrows/LeftArrow";
import {RightArrow} from "../../../../Components/Icons/Arrows/RightArrow";

export const Slider = (props) => {
    let picture = props.picture;
    const [pictureArr, setPictureArr] = useState(picture?.series_photos);

    return (
        <div className="photo-modal__slider">
            <div className="photo-modal__slider__slide__prev-button">
               <LeftArrow/>
            </div>
            {picture?.series_photos.map(photo=><div className="photo-modal__slider__slide">
                <img alt={""} src={`${process.env.REACT_APP_API_URL}${photo?.photo}`}/>
            </div>)}
            <div className="photo-modal__slider__slide__next-button">
                <RightArrow/>
            </div>
        </div>
    );
};
