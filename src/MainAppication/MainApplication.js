import React from "react";
import {Switch} from "react-router";
import {Route} from "react-router";
import {ALL_URL, CREATE_AN_ACCOUNT, LOG_IN} from "../UrlsConst";
import CreateAnAccount from "./Authorization/CreateAnAccount/CreateAnAccount";
import Main from "./Main";
import {LoginContainer} from "./Authorization/LogIn/LoginContainer";


export const MainApplication = () => {
    return (
        <div id={"app"}>
            <Switch>
                <Route exact path={["/", ...ALL_URL]} render={() => <Main/>}/>
                <Route exact path={LOG_IN} render={() => <LoginContainer/>}/>
                <Route exact path={CREATE_AN_ACCOUNT} render={() => <CreateAnAccount/>}/>
            </Switch>
        </div>
    );
};


