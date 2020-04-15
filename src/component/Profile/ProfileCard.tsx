import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProfileCardStyle} from "./ProfileCard.style";
import selfie from "../../asset/image/selfie.jpg";
import {Text} from "../Text/Text";

export const ProfileCard: FunctionComponent = function () {
    const name = "Einere";
    const occupation = "Student";
    const alt = "Einere's selfie";
    const Name = () => <Text className="name" text={name} fontSize={2} textAlign="center" padding={"1rem 0"}/>;
    const Occupation = () => <Text className="occupation" text={occupation} fontFamily={"'Noto Sans KR', sans-serif"}/>;

    return (
        <ProfileCardStyle>
            <img src={selfie} alt={alt} className="selfie"/>
            <Name/>
            <Occupation/>
        </ProfileCardStyle>
    );
};
