import React from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {User} from "../../../../Components/User/User";
import {Tags} from "../../../../Components/Tags/Tags";
import {connect} from "react-redux";
import {HeaderMainMenu} from "../../../../Header/HeaderMainMenu/HeaderMainMenu";

const DescriptionOfCollection = (props) => {
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
                    <img alt={""} src="https://moya-planeta.ru/upload/images/xl/95/fe/95fe44d0e5fe53e49d874f9c2e07381ca8ea823a.jpg"/>
                    <div className="collection__description__text-block">
                        <h3>Описание</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi deleniti ipsam, ipsum labore minima neque provident veritatis. A accusamus animi impedit laudantium minima praesentium quia quibusdam ratione, ullam voluptate.</p>
                        <div className="menu__first-block__user-profile">
                            <User imgLink={"#"} img={props.user?.profile_pic} nameLink={"#"} name={props.user?.username}/>
                        </div>
                        <div className="collection__description__text-block__tags">
                            <Tags tags={['Wallpapers1', 'Wallpapers2', 'Wallpapers3']}/>
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