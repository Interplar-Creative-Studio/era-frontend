import React from "react";
import {Share} from "../../../../Components/Icons/Share";
import {Settings} from "../../../../Components/Icons/Settings";
import {MoreOptions} from "../../../../Components/Icons/MoreOptions";
import {User} from "../../../../Components/User/User";
import {Tags} from "../../../../Components/Tags/Tags";

export const DescriptionOfCollection = (props) => {
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
                    <img src="assets/img/testImg3.png "/>
                    <div className="collection__description__text-block">
                        <h3>Описание</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi deleniti ipsam, ipsum labore minima neque provident veritatis. A accusamus animi impedit laudantium minima praesentium quia quibusdam ratione, ullam voluptate.</p>
                        <div className="menu__first-block__user-profile">
                            <User imgLink={"#"} img={"assets/img/ProfileLogo.png"} nameLink={"#"} name={"Top Waifu"}/>
                        </div>
                        <div className="collection__description__text-block__tags">
                            <Tags tags={['Wallpapers1', 'Wallpapers2', 'Wallpapers3']}/>
                        </div>
                    </div>
                </div>
            </div>

    );
};
