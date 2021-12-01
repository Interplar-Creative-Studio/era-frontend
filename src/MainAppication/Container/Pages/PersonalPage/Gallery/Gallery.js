import React, {useEffect, useState} from "react";
import {PictureForPersonalPage} from "../PictureForPersonalPage/PictureForPersonalPage";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";
import {connect} from "react-redux";
import ViewPhoto from "../../ViewPhoto/ViewPhoto";

const Gallery = (props) => {
    const [userGallery, setUserGallery] = useState([]);
    const [showPictures, setShowPictures] = useState(false);
    const url = `${process.env.REACT_APP_API_URL}/api/userposts/${props.user?.id ?? 0}`;
    useEffect(() => {
        fetchGet(setUserGallery, url);
    }, [props.user?.id]);

    const onClick = () => {
        setShowPictures(!showPictures);
    };

    return (
        <div className="personal-area__galery">
            {userGallery.length !== 0 && userGallery.map((image, i) =>
                <PictureForPersonalPage key={i} onClick={onClick}
                                        image={`${process.env.REACT_APP_API_URL}${image.series_photos[0]?.photo}`}/>)}

            {showPictures && <ViewPhoto onClick={onClick}/>}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {user: state.auth.user,}
}

export default connect(mapStateToProps)(Gallery);