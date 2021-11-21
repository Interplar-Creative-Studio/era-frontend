import React from "react";
import {Header} from "./Header/Header";
import {Container} from "./Container/Container";

export const MainApplication = (props) => {
    return(
        <div id={"app"}>
            <Header/>
            <Container/>
        </div>
    );
};
