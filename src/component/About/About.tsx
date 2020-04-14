import * as React from 'react';
import {FunctionComponent} from 'react';
import selfie from '../../asset/image/selfie.jpg';

export const About: FunctionComponent = function () {
    return (
        <>
            <div className="title" id="title-about">
                ABOUT
            </div>
            <div className="picture">
                <img src={selfie} alt="Einere's picture"/>
                    <div className="name">Einere</div>
                    <div className="description">STUDENT</div>
            </div>
            <div className="text">
                <div className="intro">
                    web developer
                </div>
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
        </>
);
};
