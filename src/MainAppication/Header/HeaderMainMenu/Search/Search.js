import React from "react";
import {Tags} from "../Tags/Tags";

export const Search = (props) => {
    let titlesAndTags = {
        ['Недавно искали']: {tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
        ['Популярные запросы']: {tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
        ['Популярные темы']: {tags: ['Wallpapers', 'Wallpapers', 'Wallpapers', 'Wallpapers']},
        ['Популярные коллекции']: {tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
    };

    return (
        <div className="menu__first-block__search-box" id="inputActive">
            <input id="inputActivator" type="text" placeholder="Search for something beautiful"/>
            <div className="menu__first-block__search-box__short" id="helperActive">
                {Object.keys(titlesAndTags).map((key, i) => <Tags title={key} tags={titlesAndTags[key].tags} key={i}/>)}
            </div>
        </div>
    );
};
