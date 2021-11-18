import React from "react";
import {Tags} from "../../../Components/Tags/Tags";

let titlesAndTags = [
    {title: "Недавно искали", tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
    {title: "Популярные запросы", tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
    {title: "Популярные темы", tags: ['Wallpapers', 'Wallpapers', 'Wallpapers', 'Wallpapers']},
    {title: "Популярные коллекции", tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
];

export const Search = (props) => {
    return (
        <div className="menu__first-block__search-box" id="inputActive">
            <input id="inputActivator" type="text" placeholder="Search for something beautiful"/>
            <div className="menu__first-block__search-box__short" id="helperActive">
                {titlesAndTags.map((elem, i) => <Tags title={elem.title} tags={elem.tags} key={i}/>)}
            </div>
        </div>
    );
};
