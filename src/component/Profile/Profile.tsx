import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProfileStyle} from "./Profile.style";
import {Text} from "../Text/Text";
import {ProfileCard} from "./ProfileCard";
import {Information} from "./Information";
import {SnsContainer} from "./SnsContainer";
import {History} from "./History";
import {InterestedIn} from "./InterestedIn";

export const Profile: FunctionComponent = function () {
    const Intro = () => <Text className="intro"
                              text={"Sustainable Web Developer"}
                              fontFamily={"'Noto Sans KR', sans-serif"}
                              letterSpacing={1.2} padding={"1rem 0"}
                              textAlign={'left'}/>;

    return (
        <ProfileStyle>
            <ProfileCard/>
            <div className="description">
                <Intro/>
                <Information/>
                <SnsContainer/>
            </div>
            <InterestedIn/>
            <History/>
        </ProfileStyle>
    );
};
