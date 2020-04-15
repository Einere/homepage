import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProfileStyle} from "./Profile.style";
import {Text} from "../Text/Text";
import {ProfileCard} from "./ProfileCard";
import {Information} from "./Information";

export const Profile: FunctionComponent = function () {
    const Intro = () => <Text className="intro"
                              text={"Sustainable Web Developer"}
                              fontFamily={"'Noto Sans KR', sans-serif"}
                              letterSpacing={1.5} padding={"1rem 0"}
                              textAlign={'center'}/>;

    return (
        <ProfileStyle>
            <ProfileCard/>
            <div className="description">
                <Intro/>
                <Information/>
                <div className="sns">
                    <a target="_blank" rel="noopener noreferrer" href="https://facebook.com/hyungjun.choi.146">
                        <i className="fab fa-facebook-f"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alban_arthuan/">
                        <i className="fab fa-instagram"/>
                    </a>
                </div>
            </div>
            <div className="history">
                <div className="history-title">
                    HISTORY
                </div>
                <p>2013.03 - 광운대학교 입학</p>
                <p>2014.10 ~ 2016.09 - 대한민국 해군 복무</p>
                <p>2017.09 ~ 12 - 융합 KWIX 수행</p>
                <p>2018.07 ~ 08 - 럭스로보 웹 개발 인턴 근무</p>
            </div>
        </ProfileStyle>
    );
};
