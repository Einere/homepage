import * as React from 'react';
import {FunctionComponent} from 'react';
import {ProfileStyle} from "./Profile.style";
import {Text} from "../Text/Text";
import {ProfileCard} from "./ProfileCard";

export const Profile: FunctionComponent = function () {
    const Intro = () => <Text className="intro" text={"Sustainable Web Developer"}
                              fontFamily={"'Noto Sans KR', sans-serif"}
                              letterSpacing={1.5}/>;

    return (
        <ProfileStyle>
            {/*<div className="profile-left">
                <img src={selfie} alt="Einere's selfie" className="selfie"/>
                <Name/>
                <Occupation/>
            </div>*/}
            <ProfileCard/>
            <div className="information">
                <Intro/>
                <ul>
                    <li>
                        <div className="info">
                            <i className="far fa-calendar-alt"/> dd MM, yyyy
                        </div>

                    </li>
                    <li>
                        <div className="info">
                            <i className="fa fa-phone"/> +82 10-xxxx-xxxx
                        </div>
                    </li>
                    <li>
                        <div className="info">
                            <i className="fa fa-envelope"/> kjwsx23@gmail.com
                        </div>
                    </li>
                    <li>
                        <div className="info">
                            <i className="fa fa-home"/> Seoul, Republic of Korea
                        </div>
                    </li>
                </ul>
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
