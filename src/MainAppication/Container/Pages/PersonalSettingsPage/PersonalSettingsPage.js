import React, {useState} from "react";
import {PersonalAvatar} from "../PersonalPage/PersonalInfo/UserFullInfo/PersonalAvatar/PersonalAvatar";
import {MenuSettings} from "./MenuSettings/MenuSettings";
import {PERSONAL_SETTINGS, PERSONAL_SETTINGS_ACCOUNT, PERSONAL_SETTINGS_PROFILE} from "../../../../UrlsConst";
import {useQuery} from "../../../Components/functions/functions";
import {SettingsRoute} from "./SettingsPages/SettingsRoute";
import {ExitButton} from "./ExitButton/ExitButton";
import {connect} from "react-redux";
import {load_user} from "../../../../store/actions/auth";
import axios from "axios";
import {LoadPhoto} from "./SettingsPages/LoadPhoto/LoadPhoto";
import {ElemsAddPhoto} from "../AddPhoto/ElemsAddPhoto/ElemsAddPhoto";
import {ResetUserSettings} from "./ResetUserSettings/ResetUserSettings";


let menu = [
    {href: `${PERSONAL_SETTINGS_PROFILE}`, text: "Настройки профиля"},
    {href: `${PERSONAL_SETTINGS_ACCOUNT}`, text: "Настройки аккаунта"},
    /*    {href: `${PERSONAL_SETTINGS}`, text: "Настройки ленты"},
        {href: `${PERSONAL_SETTINGS}`, text: "Подтвердить аккаунт"},
        {href: `${PERSONAL_SETTINGS}`, text: "Разрешения"},
        {href: `${PERSONAL_SETTINGS}`, text: "Конфиденциальность"},
        {href: `${PERSONAL_SETTINGS}`, text: "Безопасность"},*/
];

function userSettingsPatch(userSettings, access) {
    const url = `${process.env.REACT_APP_API_URL}/api/auth/users/me/`;
    axios.patch(url, JSON.stringify(userSettings), {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${access}`,
            'X-HTTP-Method-Override': 'PATCH'
        },
    }).then(res => console.log(res));
}

const fetchSubmitUserSettings = (url, userSendData, access) =>{
    axios.post(url, JSON.stringify(userSendData), {
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${access}`,
        },
    }).then();
}

const PersonalSettingsPage = (props) => {
    let user = props.user;
    const [userSettings, setUserSettings] = useState({});
    const [showChangeAvatar, setShowChangeAvatar] = useState(false);
    const changeShowAvatar = () => {
        setShowChangeAvatar(!showChangeAvatar);
    }
    const submitAvatar = () => {
    };
    const onChangeUserSettings = e => setUserSettings({...userSettings, [e.target.name]: e.target.value});
    const onClickSubmit = () => {
        console.log("userSettings: ", userSettings);
        userSettingsPatch(userSettings, props.access);
        props.loadUser();
    };

    function resetUserData(url, userInfo) {
        axios.post(url, JSON.stringify(userInfo), {
            headers: {
                'content-type': 'application/json',
                //'Authorization': `Bearer ${props.access}`,
            },
        }).then(res => {if (res.ok) {}});
    }
    const [showResetPassword, setShowResetPassword] = useState(false);
    const [showResetUser, setShowResetUser] = useState(false);
    const onClickShowResetPassword = () =>{setShowResetPassword(!showResetPassword);}
    const onClickShowResetUser = () =>{setShowResetUser(!showResetUser);}
    const [resetUserName, setResetUserName] = useState({
        new_username: "",
        re_new_username: "",
        current_password: "",
    });
    const [resetUserPassword, setResetUserPassword] = useState({
        new_password: "",
        re_new_password: "",
        current_password: "",
    });
    const onChangeUserName = e => setResetUserName({...resetUserName, [e.target.name]: e.target.value});
    const onChangeResetPassword = e => setResetUserPassword({...resetUserPassword, [e.target.name]: e.target.value});

    let inputsLogin = [
        {text: "Введите логин", type:"text", placeholder: "", onChange: onChangeUserName,
            value: resetUserName.new_username, name: "new_username"},
        {text: "Подтвердите логин", type:"text", placeholder: "", onChange: onChangeUserName,
            value: resetUserName.re_new_username, name: "re_new_username"},
        {text: "Введите пароль", type:"password", placeholder: "", onChange: onChangeUserName,
            value: resetUserName.current_password, name: "current_password"},
    ];

    let inputsPassword = [
        {text: "Введите новый пароль", type:"text", placeholder: "", onChange: onChangeResetPassword,
            value: resetUserPassword.new_password, name: "new_password"},
        {text: "Подтвердите новый пароль", type:"text", placeholder: "", onChange: onChangeResetPassword,
            value: resetUserPassword.re_new_password, name: "re_new_password"},
        {text: "Введите текущий пароль", type:"password", placeholder: "", onChange: onChangeResetPassword,
            value: resetUserPassword.current_password, name: "current_password"},
    ];

    const resetUserNameSubmit = () =>{
        const url = `${process.env.REACT_APP_API_URL}/api/auth/users/set_username/`;
        fetchSubmitUserSettings(url, resetUserName, props.access);
    };
    const resetUserPasswordSubmit = () =>{
        const url = `${process.env.REACT_APP_API_URL}/api/auth/users/set_password/`;
        fetchSubmitUserSettings(url, resetUserPassword,props.access);
    };

    return (
        <div className="container">
            <div className="personal-area__settings">
                <PersonalAvatar img={user?.profile_pic} href={"#"} onClickShowResetPassword={onClickShowResetPassword}/>
                {showChangeAvatar && <LoadPhoto />}
                <div className="personal-area__settings__area">
                    {showResetPassword && <ResetUserSettings text={"Сменить пароль"} inputs={inputsPassword} onClickSubmit={resetUserPasswordSubmit} onClickShowResetPassword={onClickShowResetPassword}/>}
                    {showResetUser && <ResetUserSettings text={"Сменить логин"} inputs={inputsLogin} onClickSubmit={resetUserNameSubmit} onClickShowResetPassword={onClickShowResetUser}/>}
                    {!showResetPassword && !showResetUser && <SettingsRoute user={user} onChangeUserSettings={onChangeUserSettings}
                                   onClickShowResetPassword={onClickShowResetPassword}  onClickShowResetUser={onClickShowResetUser}

                                   resetPassword={() => {
                                       const url = `${process.env.REACT_APP_API_URL}/api/auth/users/reset_password/`;
                                       resetUserData(url, {email: user?.email})
                                   }}
                                   resetLogin={() => {
                                       const url = `${process.env.REACT_APP_API_URL}/api/auth/users/reset_username/`;
                                       resetUserData(url, {email: user?.email})
                                   }}
                    />}
                </div>
                <MenuSettings onClickSubmit={onClickSubmit} menu={menu}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        access: state.auth.access,
    }
}

const mapDispatchToProps = {
    loadUser: load_user,
}


export default connect(mapStateToProps, mapDispatchToProps)(PersonalSettingsPage);