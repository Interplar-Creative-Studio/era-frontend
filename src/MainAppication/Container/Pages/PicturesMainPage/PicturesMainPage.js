import React, {useEffect, useRef, useState} from "react";
import {PicturesMap} from "./PicturesMap/PicturesMap";
import InfiniteScroll from "react-infinite-scroll-component";
import {connect} from "react-redux";
import {LoginMenu} from "../../../Header/HeaderMainMenu/LoginMenu/LoginMenu";
import {searchActionCreator} from "../../../../store/actions/searchActionCreator";


function getPage(num, index = 0) {
    if (index >= num) return 1
    if (index < 0) return num
    return index
}


const PicturesMainPage = (props) => {
    const [page, setPage] = useState(1);
    const [pictures, setPictures] = useState([]);
    const [showPictures, setShowPictures] = useState(false);

    function getArr(url) {
        fetch(url).then(response => {
            if (response.ok) {
                response.json().then(res => setPictures(prev => [...prev, ...res]))
            }
        });
        setPage(prev => getPage(0, 0));
    }

    function getInfinityArray() {
        let url = `${process.env.REACT_APP_API_URL}/api/photostock/?page=${page}&tag_id=${props.tagId ?? 1}`;
        getArr(url);
    }

    let url = `${process.env.REACT_APP_API_URL}/api/photostock/?page=${page}&tag_id=${props.tagId ?? 1}`;
    const [currTag, setCurrTag] = useState();

    function check(tag, curTag) {
        if (tag !== curTag){
            props.searchAction("");
            setPictures([]);
            setPage(0);
            setCurrTag(tag);
        }
    }

    useEffect(() => {
        check(props.tagId, currTag);
    }, [page, props.tagId]);

    useEffect(() => {
        getInfinityArray();
    }, [props.tagId]);

    useEffect(() => {
        url = `${process.env.REACT_APP_API_URL}/api/photostock/?search_query=${props.search ?? ""}`;
        setPictures([]);
        getArr(url);
    }, [props.search]);


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
                <InfiniteScroll next={props.search === "" && getInfinityArray} hasMore={true} loader={<div/>} dataLength={pictures.length}>
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
        search: state.container.search,
    });
}

const mapDispatchToProps = {
    searchAction: searchActionCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(PicturesMainPage);
