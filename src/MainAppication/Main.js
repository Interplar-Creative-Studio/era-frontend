import {Header} from "./Header/Header";
import {Container} from "./Container/Container";
import React from "react";
import {connect} from "react-redux";
import {load_user} from "../store/actions/auth";

const Main = (props) => {
    props.loadUser();
    return (
        <div>
            <Header/>
            <Container/>
        </div>
    );
}

const mapDispatchToProps = {
    loadUser: load_user,
}

export default connect(null, mapDispatchToProps)(Main)