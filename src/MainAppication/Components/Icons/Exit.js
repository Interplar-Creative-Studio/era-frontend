import React from "react";

const style = {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2px"
};

export const Exit = (props) => {
    return (
        <div className="add-photo__close-button">
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <defs style={style}>
                </defs>
                <title/>
                <g id="cross">
                    <line className="cls-1" x1="7" x2="25" y1="7" y2="25"/>
                    <line className="cls-1" x1="7" x2="25" y1="25" y2="7"/>
                </g>
            </svg>
        </div>
    );
};
