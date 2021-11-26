import React from "react";
import {Header} from "./Header/Header";
import {Container} from "./Container/Container";
import {Switch} from "react-router";
import {Route} from "react-router";
import {LogIn} from "./Authorization/LogIn/LogIn";
import {ALL_URL, CART, CREATE_AN_ACCOUNT, LOG_IN} from "../UrlsConst";
import {CreateAnAccount} from "./Authorization/CreateAnAccount/CreateAnAccount";

export const MainApplication = (props) => {
    return (
        <div id={"app"}>
            <Switch>
                <Route exact path={["/", ...ALL_URL]} render={() => <Main/>}/>
                <Route exact path={LOG_IN} render={() => <LogIn/>}/>
                <Route exact path={CREATE_AN_ACCOUNT} render={() => <CreateAnAccount/>}/>
            </Switch>
        </div>
    );
};

const Main = () => {
    return (
        <div>
            <Header/>
            <Container/>
        </div>
    );
}