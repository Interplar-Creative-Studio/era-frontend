import React from "react";
import {Header} from "./Header/Header";
import {Container} from "./Container/Container";
import {Authentication} from "./Components/AuthorizationComponents/Authentication/Authentication";
import {CreateAnAccount} from "./Authorization/CreateAnAccount/CreateAnAccount";

export const MainApplication = (props) => {
    return(
        <div id={"app"}>
       {/*     <Header/>
            <Container/>*/}
            <CreateAnAccount/>
        </div>
    );
};
