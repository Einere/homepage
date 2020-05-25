import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProfileCardStyle} from "./ProfileCard.style";
import selfie2 from "../../asset/image/selfie2.jpg";
import {Text} from "../Text/Text";
import {profileData} from "../../data/profileData";

export const ProfileCard: FunctionComponent = function () {
    const {
        name,
        introduction,
        alt,
    } = profileData;
    
    const Name = () => <Text className="name" text={name} fontSize={2} textAlign="center" padding={"1rem 0"}/>;
    const Introduction = () => <Text className="introduction" text={introduction} fontFamily={"'Noto Sans KR', sans-serif"}/>;

    return (
        <ProfileCardStyle>
            <img src={selfie2} alt={alt} className="selfie"/>
            <Name/>
            <Introduction/>
        </ProfileCardStyle>
    );
};
