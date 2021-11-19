import React from "react";
import {Picture} from "./Picture/Picture";

export const PicturesMainPage = () => {
    return (
        <div className="container">
            <div className="main main-first">
                <div className="picture__page">
                    <Picture imgLink={"#"} img={"assets/img/testImg2.png"} pictureNameLink={"#"}
                             pictureName={"Caption caption"}/>
                    <Picture imgLink={"#"} img={"assets/img/testImg.png"} pictureNameLink={"#"}
                             pictureName={"Caption caption"}/>
                    <Picture imgLink={"#"} img={"assets/img/testImg3.png"} pictureNameLink={"#"}
                             pictureName={"Caption caption"}/>
                    <Picture imgLink={"#"} img={"assets/img/testImg2.png"} pictureNameLink={"#"}
                             pictureName={"Caption caption"}/>
                    <Picture imgLink={"#"} img={"assets/img/testImg2.png"} pictureNameLink={"#"}
                             pictureName={"Caption caption"}/>
                    <Picture imgLink={"#"} img={"assets/img/testImg2.png"} pictureNameLink={"#"}
                             pictureName={"Caption caption"}/>
                    <Picture imgLink={"#"} img={"assets/img/testImg2.png"} pictureNameLink={"#"}
                             pictureName={"Caption caption"}/>


                </div>
            </div>

        </div>
    );
};
