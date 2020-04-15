import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProfileCardStyle} from "./ProfileCard.style";
import selfie from "../../asset/image/selfie.jpg";
import {Text} from "../Text/Text";

export const ProfileCard: FunctionComponent = function () {
    const Name = () => <Text className="name" text={"Einere"} fontSize={2} textAlign="center" padding={"1rem 0"}/>;
    const Occupation = () => <Text className="occupation" text={"Student"} fontFamily={"'Noto Sans KR', sans-serif"}/>;

    return (
        <ProfileCardStyle>
            <img src={selfie} alt="Einere's selfie" className="selfie"/>
            <Name/>
            <Occupation/>
        </ProfileCardStyle>
    );
};
