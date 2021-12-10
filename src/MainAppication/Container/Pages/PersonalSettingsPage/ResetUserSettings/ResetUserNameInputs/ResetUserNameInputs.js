import React from "react";
import {Input} from "../../../../../Components/AuthorizationComponents/Input/Input";

export const ResetUserNameInputs = (props) => {
    return(
        <div>
            {props.inputs.map(input=>
                <Input onChange={input.onChange}
                       value={input.value}
                       className={"auth__block__form__input"}
                       text={input.text} type={input.type}
                       placeholder={input.placeholder}
                name={input.name}/>

            )}
        </div>
    );
};
