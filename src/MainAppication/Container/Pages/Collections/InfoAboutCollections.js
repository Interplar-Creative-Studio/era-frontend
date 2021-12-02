import React, {useEffect, useState} from "react";
import DescriptionOfCollection from "./DescriptionOfCollection/DescriptionOfCollection";
import {PicturesMap} from "../PicturesMainPage/PicturesMap/PicturesMap";
import {indexActionCreator} from "../../../../store/actions/indexActionCreator";
import {connect} from "react-redux";
import {fetchGet} from "../../../Components/functions/asyncFunctions";


const InfoAboutCollections = (props) => {
    const [collection, setCollection] = useState({});
    const [picture, setPicture] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URL}/api/collection/${props.idCollection ?? 0}`;
        fetchGet(setCollection, url);
    }, [props.idCollection]);

    useEffect(() => {
        for (let i = 0; i < collection?.collections_series?.length ?? 0; i++) {
            let url = `${process.env.REACT_APP_API_URL}/api/post/${collection?.collections_series[i] ?? 0}`;
            fetch(url).then(response => response.json().then(res => setPicture(prevState => [...prevState, res])));
        }
    }, [collection?.collections_series]);


    const [tempPicture, setTempPicture] = useState([]);
    useEffect(()=>{
        for (let i = 0; i < picture?.length ?? 0; i++) {
            setTempPicture(pref => [...pref, {
                series_photos: picture[i]?.series_photos,
                name: picture[i]?.name,
                id: picture[i]?.id,
            }]);
        }
    },[picture]);
    console.log("tempPicture: ", tempPicture);
    return (
        <div className="container">
            <DescriptionOfCollection collection={collection} header={collection?.name}/>
            <PicturesMap pictures={tempPicture}/>
        </div>

    );
};

const mapStateToProps = (state) => {
    return {idCollection: state.auth.idCollection,};
}


export default connect(mapStateToProps)(InfoAboutCollections);
