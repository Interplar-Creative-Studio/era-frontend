import React, {useEffect, useRef, useState} from "react";
import {PicturesMap} from "./PicturesMap/PicturesMap";
import {fetchGet} from "../../../Components/functions/asyncFunctions";
import InfiniteScroll from "react-infinite-scroll-component";
import {connect} from "react-redux";
import {LoginMenu} from "../../../Header/HeaderMainMenu/LoginMenu/LoginMenu";


function getPage(num, index = 0) {
    if (index >= num ) return 1
    if (index < 0) return num
    return index
}

const PicturesMainPage = (props) => {
    const [page, setPage] = useState(1);
    const [pictures, setPictures] = useState([]);
    const [showPictures, setShowPictures] = useState(false);
    function getArr(){
        url = `${process.env.REACT_APP_API_URL}/api/photostock/?page=${page}&tag_id=${props.tagId ?? 1}`;
        fetch(url).then(response => response.json().then(res => setPictures( pictures.concat(res))));
        setPage(prev=>getPage(3,prev+1));
    }
    let url = `${process.env.REACT_APP_API_URL}/api/photostock/?page=${page}&tag_id=${props.tagId ?? 1}`;
    useEffect(() => {
        getArr()
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
