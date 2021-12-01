import React from "react";

export const Slider = (props) => {
    return(
        <div className="photo-modal__slider">
            {/* <div className="photo-modal__slider__slide__prev-button">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 404.258 404.258" style="enable-background:new 0 0 404.258 404.258;" xml:space="preserve"><polygon points="289.927,18 265.927,0 114.331,202.129 265.927,404.258 289.927,386.258 151.831,202.129 "/></svg>
                    </div>*/}
            <div className="photo-modal__slider__slide"><img src="assets/img/testImg4.png"/></div>
            <div className="photo-modal__slider__slide"><img src="assets/img/testImg4.png"/></div>
            <div className="photo-modal__slider__slide"><img src="assets/img/testImg4.png"/></div>
            {/*<div className="photo-modal__slider__slide__next-button">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 404.258 404.258" style="enable-background:new 0 0 404.258 404.258;" xml:space="preserve"><polygon points="138.331,0 114.331,18 252.427,202.129 114.331,386.258 138.331,404.258 289.927,202.129 "/></svg>
                    </div>*/}
        </div>
    );
};
