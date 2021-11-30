import React from "react";
import DescriptionOfCollection from "./DescriptionOfCollection/DescriptionOfCollection";
import {PicturesMap} from "../PicturesMainPage/PicturesMap/PicturesMap";

export const Collections = (props) => {
    return (
        <div className="container">
            <DescriptionOfCollection header={"Колекция 1"}/>
            <PicturesMap/>
        </div>

    );
};
