import React from "react";

export const LoadPhoto = (props) => {
    return (
        <div className="container-add-avatar__slider__input-file container-add-avatar__profile">
            <div className="add-avatar__slider__input-file">
                <form id="formElem">
                    <input id="addPhoto" accept="image/*" type="file" name="photo"
                           onChange={props.upLoadPhoto}/>
                    <label htmlFor="addPhoto" id="drop-area-photo">
                        <p className="simple-text">Поместите изображение сюда</p>
                        <p className="drop-text">Отпустите чтобы загрузить</p>
                    </label>
                </form>
            </div>
        </div>
    );
};
