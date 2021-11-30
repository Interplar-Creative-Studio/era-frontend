import React, {useEffect, useState} from "react";
import {PictureForPersonalPage} from "../PictureForPersonalPage/PictureForPersonalPage";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";
import {connect} from "react-redux";

const Gallery = (props) => {
    const [userGallery, setUserGallery] = useState([]);
    const url = `${process.env.REACT_APP_API_URL}/api/userposts/${props.user?.id ?? 0}`;
    useEffect(() => {
        fetchGet(setUserGallery, url);
    }, [props.user?.id]);

    return (
        <div className="personal-area__galery">
            {userGallery.length !== 0 && userGallery.map((image, i) =>
                <PictureForPersonalPage key={i} image={`${process.env.REACT_APP_API_URL}${image.series_photos[0]?.photo}`}/>)}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {user: state.auth.user,}
}

export default connect(mapStateToProps)(Gallery);