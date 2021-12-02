import React, {useEffect, useState} from "react";
import {PictureForCollection} from "./PictureForCollection/PictureForCollection";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";
import {indexActionCreator} from "../../../../../store/actions/indexActionCreator";
import {connect} from "react-redux";

const Collections = (props) => {
    // /api/post/{id}
    const [collections, setCollections] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URL}/api/usercollections/${props.user?.id ?? 0}`;
        fetchGet(setCollections, url)
    }, [props.user?.id]);
    return (
        <div className={"personal-area__collection"}>
            {collections.map((collection, i) => <PictureForCollection key={i}
                                                                      onClick={()=>{props.indexAction(collection?.id)}} collection={collection}/>)}
        </div>
    );
};

const mapDispatchToProps ={
    indexAction: indexActionCreator,
};
export default connect(null, mapDispatchToProps)(Collections);
