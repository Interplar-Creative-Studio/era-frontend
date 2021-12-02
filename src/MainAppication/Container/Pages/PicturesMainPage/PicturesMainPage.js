import React, {useEffect, useState} from "react";
import {PicturesMap} from "./PicturesMap/PicturesMap";
import {fetchGet} from "../../../Components/functions/asyncFunctions";
import InfiniteScroll from "react-infinite-scroll-component";
import {connect} from "react-redux";
import {LoginMenu} from "../../../Header/HeaderMainMenu/LoginMenu/LoginMenu";

const PicturesMainPage = (props) => {
    const [pictures, setPictures] = useState([]);
    const [showPictures, setShowPictures] = useState(false);

    let url = `${process.env.REACT_APP_API_URL}/api/photostock/?tag_id=${props.tagId ?? 1}`;
    useEffect(() => {
        url = `${process.env.REACT_APP_API_URL}/api/photostock/?tag_id=${props.tagId ?? 1}`;
        fetchGet(setPictures, url);
    }, [props.tagId]);

    const onClick = () => {
        setShowPictures(!showPictures);
    };
    const [isTime, setTime] = useState(false);
    const getTime = () => {
        setTimeout(() => setTime(true), 5000);
    }

    const getModal = () =>{
        getTime();
        return isTime && <LoginMenu/>
    }

    return (
        <>
            {props.user === null && getModal()}
            <div className="container">
                <InfiniteScroll
                    dataLength={pictures.length} //This is important field to render the next data
                    next={() => fetchGet(setPictures, url)}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{textAlign: 'center'}}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    // below props only if you need pull down functionality
                    //refreshFunction={this.refresh}
                    //pullDownToRefresh
                    pullDownToRefreshThreshold={50}
                    pullDownToRefreshContent={
                        <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
                    }
                    releaseToRefreshContent={
                        <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                    }
                >
                    <PicturesMap showPictures={showPictures} setShowPictures={setShowPictures} onClick={onClick}
                                 pictures={pictures}/>
                </InfiniteScroll>

            </div>
        </>
    );
};



const mapStateToProps = (state) => {
    return ({
        tagId: state.auth.tagId,
        user: state.auth.user,

    });
}


export default connect(mapStateToProps)(PicturesMainPage);
