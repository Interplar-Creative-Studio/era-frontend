import React, {useEffect, useState} from "react";
import {TabPanelIcons} from "./TabPanelIcons/TabPanelIcons";
import {PICTURE_PAGE} from "../../../UrlsConst";
import {fetchGet} from "../../Components/functions/asyncFunctions";
import {tagsIdActionCreator} from "../../../store/actions/tagsIdActionCreator";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

let menu = [
    {href: PICTURE_PAGE, text: "Wallpapers"},
    {href: "#", text: "3D Renders"},
    {href: "#", text: "Textures & Patterns"},
    {href: "#", text: "Architecture"},
    {href: "#", text: "Current "},
    {href: "#", text: "Experimental"},
    {href: "#", text: "Nature"},
    {href: "#", text: "Fashion"},
    {href: "#", text: "Film"},
    {href: "#", text: "Food & Drink"},
];

const HeaderSubMenu = (props) => {
    const [tags, setTags] = useState([]);
    useEffect(() => {
        let url = `${process.env.REACT_APP_API_URL}/api/categories/?limit=10`;
        fetchGet(setTags, url);
    }, []);

    const onClick = (id) =>{
        props.tagsIdAction(id);
    };
    return (
        <div className="menu__second-block container">
            <ul>
                {tags.map((tag, i)=><li key={i} onClick={()=>onClick(tag?.id)}><NavLink to={PICTURE_PAGE}>{tag?.tag}</NavLink></li>)}
            </ul>
            {props.user !== null && <TabPanelIcons/>}
        </div>
    );
};

const mapDispatchToProps = {
    tagsIdAction: tagsIdActionCreator,
};

const mapStateToProps = (state) =>({
    user: state.auth.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderSubMenu);
