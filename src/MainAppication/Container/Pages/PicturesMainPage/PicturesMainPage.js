import React, {useEffect, useState} from "react";
import {PicturesMap} from "./PicturesMap/PicturesMap";
import {fetchGet} from "../../../Components/functions/asyncFunctions";

export const PicturesMainPage = () => {
    const [pictures, setPictures] = useState([]);
    const url = `${process.env.REACT_APP_API_URL}/api/photostock/`;

    useEffect(() => {
        fetchGet(setPictures, url);
    }, []);


    return (
        <div className="container">
            <PicturesMap pictures={pictures}/>
        </div>
    );
};
