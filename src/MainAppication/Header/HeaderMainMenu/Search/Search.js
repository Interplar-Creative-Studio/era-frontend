import React, {useState} from "react";
import {Tags} from "../../../Components/Tags/Tags";
import axios from "axios";

let titlesAndTags = [
    {title: "Недавно искали", tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
    {title: "Популярные запросы", tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
    {title: "Популярные темы", tags: ['Wallpapers', 'Wallpapers', 'Wallpapers', 'Wallpapers']},
    {title: "Популярные фотоархивы", tags: ['Wallpapers', 'Wallpapers', 'Wallpapers']},
];

function searchOnClick() {
    document.getElementById('inputActivator').onclick = function () {
        document.getElementById('helperActive').classList.toggle('menu__first-block__search-box__short-active');
        document.getElementById('inputActive').classList.toggle('menu__first-block__search-box-active');

        function menuClose() {
            document.getElementById('helperActive').classList.remove('menu__first-block__search-box__short-active');
            document.getElementById('inputActive').classList.remove('menu__first-block__search-box-active');
        }

        function menuCloseClickOutside(e) {
            if (!e.target.matches('.menu__first-block__search-box,.menu__first-block__search-box *')) {
                menuClose();
            }
        }

        document.addEventListener('click', menuCloseClickOutside);
        document.addEventListener('touchstart', menuCloseClickOutside);
    }
}


export const Search = (props) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = event => {
        setSearch(event.target.value);
        props.searchAction(event.target.value);
    };

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            setSearch(event.target.value);
            props.searchAction(event.target.value);
        }
    }

    return (
        <div className="menu__first-block__search-box" id="inputActive">
            <input value={search} onChange={onChangeSearch} onKeyPress={onKeyPress}
                   id="inputActivator" type="text" placeholder="Search for something beautiful"/>
            <div className="menu__first-block__search-box__short" id="helperActive">
                {titlesAndTags.map((elem, i) => <Tags title={elem.title} tags={elem.tags} key={i}/>)}
            </div>
        </div>
    );
};
