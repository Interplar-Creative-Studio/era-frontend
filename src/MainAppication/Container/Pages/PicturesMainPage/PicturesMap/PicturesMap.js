import React from "react";
import {Picture} from "../Picture/Picture";

export const PicturesMap = (props) => {
    const pictures = [
        {imgLink: "#", img: "assets/img/testImg2.png", pictureNameLink: "#", pictureName: "Caption caption"},
        {imgLink: "#", img: "assets/img/testImg.png", pictureNameLink: "#", pictureName: "Caption caption"},
        {imgLink: "#", img: "assets/img/testImg3.png", pictureNameLink: "#", pictureName: "Caption caption"},
        {imgLink: "#", img: "assets/img/testImg2.png", pictureNameLink: "#", pictureName: "Caption caption"},
        {imgLink: "#", img: "assets/img/testImg2.png", pictureNameLink: "#", pictureName: "Caption caption"},
        {imgLink: "#", img: "assets/img/testImg1.png", pictureNameLink: "#", pictureName: "Caption caption"},
        {imgLink: "#", img: "assets/img/testImg3.png", pictureNameLink: "#", pictureName: "Caption caption"},
    ];
    return (
        <div className="main main-first">
            <div className="picture__page">
                {pictures.map(pic => <Picture imgLink={pic.imgLink} img={pic.img} pictureNameLink={pic.pictureNameLink}
                                              pictureName={pic.pictureName}/>)}
            </div>
        </div>
    );
};
