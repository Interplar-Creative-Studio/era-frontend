import React, {useEffect, useState} from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {User} from "../../../../Components/User/User";
import {Tags} from "../../../../Components/Tags/Tags";
import {connect} from "react-redux";
import {HeaderMainMenu} from "../../../../Header/HeaderMainMenu/HeaderMainMenu";
import {fetchGet} from "../../../../Components/functions/asyncFunctions";

const DescriptionOfCollection = (props) => {
    let collection = props.collection;
    const [user, userSet] = useState({});
    useEffect(()=>{
        let url = `${process.env.REACT_APP_API_URL}/api/user/shortinfo/${collection?.owner ?? 0}`;
        fetchGet(userSet, url);
    },[collection?.owner]);


    return(
            <div className="collection">
                <div className="collection__header">
                    <h2>{props.header}</h2>
                    <div className="collection__header__icons">
                        <Share color={"black"}/>
                        <Settings color={"black"}/>
                        <MoreOptions color={"black"}/>
                    </div>
                </div>
                <div className="collection__description">
                    <img alt={""} src={`${process.env.REACT_APP_API_URL}${collection?.cover}`}/>
                    <div className="collection__description__text-block">
                        <h3>Описание</h3>
                        <p>{collection?.description}</p>
                        <div className="menu__first-block__user-profile">
                            <User imgLink={"#"} img={`${process.env.REACT_APP_API_URL}${user?.profile_pic}`} nameLink={"#"} name={user?.username}/>
                        </div>
                        <div className="collection__description__text-block__tags">
                            {/*<Tags tags={['Wallpapers1', 'Wallpapers2', 'Wallpapers3']}/>*/}
                        </div>
                    </div>
                </div>
            </div>

    );
};

const mapStateToProps = (state) => {
    return {user: state.auth.user,}
};

export default connect(mapStateToProps)(DescriptionOfCollection);