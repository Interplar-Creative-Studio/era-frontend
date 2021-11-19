import React from "react";
import {PersonalInfo} from "./PersonalInfo/PersonalInfo";
import {PictureForPersonalPage} from "./PictureForPersonalPage/PictureForPersonalPage";

let images = [
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
    {imgLink: "#", img: "assets/img/testImg4.png", pictureName: "Caption caption", views: 123, likes: 45},
];

export const PersonalPage = (props) => {
    return (
        <div className="container">
            <PersonalInfo/>
            <div className="personal-area__galery">
            {images.map(image => <PictureForPersonalPage imgLink={image.imgLink} img={image.img}
                                                         pictureName={image.pictureName} views={image.views}
                                                         likes={image.likes}/>)}

            </div>
        </div>
    );
};
