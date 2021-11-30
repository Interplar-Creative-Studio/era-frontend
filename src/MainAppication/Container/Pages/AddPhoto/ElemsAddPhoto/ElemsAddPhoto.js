import React from "react";

export const ElemsAddPhoto = (props) => {
    return (
        <div className="add-photo__slider">
            <div className="add-photo__slider__input-file">
                <form id="formElem">
                    <input id="addPhoto" accept="image/*" type="file" name="photo" onChange={props.upLoadPhoto}/>
                    <label htmlFor="addPhoto" id="drop-area-photo">
                        <p className="simple-text">Поместите изображение сюда</p>
                        <p className="drop-text">Отпустите чтобы загрузить</p>
                    </label>
                </form>
            </div>
        </div>
    );
};
