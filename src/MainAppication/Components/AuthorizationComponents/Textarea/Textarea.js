import React from "react";

export const Textarea = (props) => {
    return(
        <div className="personal-area__settings__area__profile__personal-information__text-area">
            <p>{props.text}</p>
            <textarea id="ta" placeholder={props.placeholder} maxLength={props.maxLength}>

            </textarea>
            <div><span id={props.id}>0</span><span>/300</span></div>
        </div>
    );
};
