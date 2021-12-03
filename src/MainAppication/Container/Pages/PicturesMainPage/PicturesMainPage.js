import React, {useEffect, useRef, useState} from "react";
import {PicturesMap} from "./PicturesMap/PicturesMap";
import {fetchGet} from "../../../Components/functions/asyncFunctions";
import InfiniteScroll from "react-infinite-scroll-component";
import {connect} from "react-redux";
import {LoginMenu} from "../../../Header/HeaderMainMenu/LoginMenu/LoginMenu";


function getPage(num, index = 0) {
    if (index >= num) return 1
    if (index < 0) return num
    return index
}


const PicturesMainPage = (props) => {
    const [page, setPage] = useState(1);
    const [pictures, setPictures] = useState([]);
    const [showPictures, setShowPictures] = useState(false);

    function getArr() {
        url = `${process.env.REACT_APP_API_URL}/api/photostock/?page=${page}&tag_id=${props.tagId ?? 1}`;
        fetch(url).then(response => {
            if (response.ok) {
                // response.json().then(res => {setPictures(pictures.concat(res).reverse())})
                response.json().then(res => setPictures(prev => [...prev, ...res]))
                // response.json().then(res => setPictures(prev=>[...prev, res]))
            }
        });
        setPage(prev => getPage(0, 0));
    }

    let url = `${process.env.REACT_APP_API_URL}/api/photostock/?page=${page}&tag_id=${props.tagId ?? 1}`;
    const [currTag, setCurrTag] = useState();

    function check(tag, curTag) {
        if (tag !== curTag) {
            setPictures([]);
            setPage(0);
            setCurrTag(tag);
        }
    }

    useEffect(() => {
        check(props.tagId, currTag);
    }, [page, props.tagId]);

    useEffect(() => {
        //check(props.tagId, currTag);
        getArr();
    }, [props.tagId]);

    for (const picture of pictures) {
        console.log("pictures: ", JSON.stringify(picture.id), "\n");
    }
    console.log("\n");

    const onClick = () => {
        setShowPictures(!showPictures);
    };
    const [isTime, setTime] = useState(false);
    const getTime = () => {
        setTimeout(() => setTime(true), 5000);
    }

    const getModal = () => {
        getTime();
        return isTime && <LoginMenu/>
    }

    return (
        <>
            {props.user === null && getModal()}
            <div className="container">
                <InfiniteScroll next={getArr} hasMore={true} loader={<div/>} dataLength={pictures.length}>
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
