import React, {useEffect, useState} from "react";
import {ViewPhotoHeader} from "./ViewPhotoHeader/ViewPhotoHeader";
import {Slider} from "./Slider/Slider";
import {PhotoModalTitle} from "./PhotoModalTitle/PhotoModalTitle";
import {ViewPhotoDescription} from "./ViewPhotoDescription/ViewPhotoDescription";
import {MorePhotos} from "./MorePhotos/MorePhotos";
import {connect} from "react-redux";
import {fetchGet} from "../../../Components/functions/asyncFunctions";



const ViewPhoto = (props) => {
    const [picture, setPicture] = useState();
    useEffect(()=>{
        let url = `${process.env.REACT_APP_API_URL}/api/post/${props?.pictureId ?? 0}`;
        fetchGet(setPicture, url);
    }, [props?.pictureId]);

    return (
        <div className="photo-modal-window">
            <div className="photo-modal">
                <ViewPhotoHeader picture={picture} onClick={props.onClick}/>
                <Slider picture={picture}/>
                <PhotoModalTitle picture={picture}/>
                <ViewPhotoDescription picture={picture}/>
                <MorePhotos picture={picture}/>
            </div>
        </div>
    );
};

export const mapStateToProps = (state) =>{
    return {
        user: state.auth.user,
    }
};


export default connect(mapStateToProps)(ViewPhoto);