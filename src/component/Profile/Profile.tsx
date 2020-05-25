import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProfileStyle} from "./Profile.style";
import {Text} from "../Text/Text";
import {ProfileCard} from "./ProfileCard";
import {Information} from "./Information";
import {SnsContainer} from "./SnsContainer";
import {History} from "./History";
import {InterestedIn} from "./InterestedIn";
import {introData} from "../../data/introData";

export const Profile: FunctionComponent = function () {
    const {
        introTitle,
        introText,
        introFontFamily,
        introLetterSpacing,
        introPadding,
        introTextAlign,
    } = introData;

    const Intro = () => <Text className={introTitle} text={introText} fontFamily={introFontFamily}
                              letterSpacing={introLetterSpacing} padding={introPadding} textAlign={introTextAlign}/>;

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
