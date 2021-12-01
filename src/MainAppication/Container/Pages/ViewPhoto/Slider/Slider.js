import React from "react";
import {LeftArrow} from "../../../../Components/Icons/Arrows/LeftArrow";
import {RightArrow} from "../../../../Components/Icons/Arrows/RightArrow";

export const Slider = (props) => {
    return (
        <div className="photo-modal__slider">
            <div className="photo-modal__slider__slide__prev-button">
               <LeftArrow/>
            </div>
            <div className="photo-modal__slider__slide"><img src="assets/img/testImg4.png"/></div>
            <div className="photo-modal__slider__slide"><img src="assets/img/testImg4.png"/></div>
            <div className="photo-modal__slider__slide"><img src="assets/img/testImg4.png"/></div>
            <div className="photo-modal__slider__slide__next-button">
                <RightArrow/>
            </div>
        </div>
    );
};
