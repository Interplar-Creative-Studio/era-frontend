import React, {useEffect, useState} from "react";
import {LeftArrow} from "../../../../Components/Icons/Arrows/LeftArrow";
import {RightArrow} from "../../../../Components/Icons/Arrows/RightArrow";

function getIndex(arr, index = 0) {
    if (index >= arr?.length ) return 0
    if (index < 0) return arr?.length - 1
    return index
}

function getPhoto(arr, index = 0) {
    return (<ImageSlider src={`${process.env.REACT_APP_API_URL}${arr[getIndex(arr, index)]?.photo}`}/>);
}

export const Slider = (props) => {
    let picture = props.picture;
    const [pictureArr, setPictureArr] = useState(picture?.series_photos);
    useEffect(() => {
        setPictureArr(picture?.series_photos)
    }, [picture?.series_photos]);

    const [index, setIndex] = useState(0);

    return (
        <div className="photo-modal__slider">
            <div className="photo-modal__slider__slide__prev-button"
                 onClick={() => setIndex(getIndex(pictureArr, index - 1))}>
                <LeftArrow/>
            </div>
            {pictureArr && getPhoto(pictureArr, index)}
            <div className="photo-modal__slider__slide__next-button"
                 onClick={() => setIndex(getIndex(pictureArr, index + 1))}>
                <RightArrow/>
            </div>
        </div>
    );
};

const ImageSlider = (props) => {
    let urlPic = "https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg";
    return (
        <div className="photo-modal__slider__slide">
            <img alt={""} src={props.src ?? urlPic}/>
        </div>);
}