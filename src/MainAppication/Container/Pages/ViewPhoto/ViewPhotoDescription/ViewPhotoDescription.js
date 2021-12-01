import React from "react";
import {MenuMap} from "../../../../Components/MenuElement/MenuMap";

export const ViewPhotoDescription = (props) => {
    let tags = [
        {href: "#", text: "Wallpapers"},
        {href: "#", text: "Wallpapers"},
        {href: "#", text: "Wallpapers"},
        {href: "#", text: "Wallpapers"},
        {href: "#", text: "Wallpapers"},
        {href: "#", text: "Wallpapers"},
    ];
    return (
        <div className="photo-modal__description">
            <div className="photo-modal__description__text-block">
                <h2>Описание фото</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper est at finibus
                    mattis. Maecenas congue ligula ante, sed pretium tortor porta a. Proin lorem nulla,
                    elementum in varius vitae, ullamcorper sed sapien. Nulla sit amet ullamcorper est. Donec
                    tincidunt viverra lacinia. Etiam efficitur auctor turpis eget aliquet. Ut mollis finibus
                    ligula. Fusce non ornare turpis. Nam dignissim nunc vel sem ultricies, ut auctor magna
                    aliquam. Aenean ut ullamcorper enim. Suspendisse sit amet blandit tortor. Vestibulum vel
                    volutpat lectus, et lacinia orci. Nulla ut lectus sed dolor fermentum sollicitudin nec et
                    odio. Morbi varius, velit non accumsan pharetra, est tortor dignissim nibh, condimentum
                    ornare justo massa id sapien. Maecenas at dignissim augue.</p>
            </div>
            <div className="photo-modal__description__text-block">
                <h2>Описание серии работ</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper est at finibus
                    mattis. Maecenas congue ligula ante, sed pretium tortor porta a. Proin lorem nulla,
                    elementum in varius vitae, ullamcorper sed sapien. Nulla sit amet ullamcorper est. Donec
                    tincidunt viverra lacinia. Etiam efficitur auctor turpis eget aliquet. Ut mollis finibus
                    ligula. Fusce non ornare turpis. Nam dignissim nunc vel sem ultricies, ut auctor magna
                    aliquam. Aenean ut ullamcorper enim. Suspendisse sit amet blandit tortor. Vestibulum vel
                    volutpat lectus, et lacinia orci. Nulla ut lectus sed dolor fermentum sollicitudin nec et
                    odio. Morbi varius, velit non accumsan pharetra, est tortor dignissim nibh, condimentum
                    ornare justo massa id sapien. Maecenas at dignissim augue.</p>
            </div>
            <div className="photo-modal__description__hashtags">
                <h2>Хештеги</h2>
                <ul>
                    {<MenuMap arr={tags}/>}
                </ul>
            </div>
        </div>
    );
};
