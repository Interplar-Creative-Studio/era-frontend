import React from "react";
import {PersonalAvatar} from "../PersonalPage/PersonalInfo/UserFullInfo/PersonalAvatar/PersonalAvatar";
import {MenuSettings} from "./MenuSettings/MenuSettings";
import {PERSONAL_SETTINGS, PERSONAL_SETTINGS_ACCOUNT, PERSONAL_SETTINGS_PROFILE} from "../../../../UrlsConst";
import {useQuery} from "../../../Components/functions/functions";
import {SettingsRoute} from "./SettingsPages/SettingsRoute";
import {ExitButton} from "./ExitButton/ExitButton";
import {connect} from "react-redux";


let menu = [
    {href: `${PERSONAL_SETTINGS}?settings=${PERSONAL_SETTINGS_PROFILE}`, text: "Настройки профиля"},
    {href: `${PERSONAL_SETTINGS}?settings=${PERSONAL_SETTINGS_ACCOUNT}`, text: "Настройки аккаунта"},
    {href: `${PERSONAL_SETTINGS}`, text: "Настройки ленты"},
    {href: `${PERSONAL_SETTINGS}`, text: "Подтвердить аккаунт"},
    {href: `${PERSONAL_SETTINGS}`, text: "Разрешения"},
    {href: `${PERSONAL_SETTINGS}`, text: "Конфиденциальность"},
    {href: `${PERSONAL_SETTINGS}`, text: "Безопасность"},
];

const PersonalSettingsPage = (props) => {
    let user = props.user;
    let query = useQuery();
    return (
        <div className="container">
            <div className="personal-area__settings">
                <PersonalAvatar img={user?.profile_pic} href={"#"}/>
                <ExitButton/>
                <div className="personal-area__settings__area">
                    <SettingsRoute user={user} settings={query.get("settings")}/>
                </div>
                <MenuSettings menu={menu}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {user: state.auth.user,}
}

export default connect(mapStateToProps)(PersonalSettingsPage);