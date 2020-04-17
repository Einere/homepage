import * as React from 'react';
import {FunctionComponent} from 'react';
import {HistoryStyle} from "./History.style";
import {SubTitle} from "../Title/SubTitle";

const histories = [
    {
        period: {
            start: "2013.03"
        },
        content: "광운대학교 입학"
    },
    {
        period: {
            start: "2014.10",
            end: "2016.09"
        },
        content: "대한민국 해군 복무"
    },
    {
        period: {
            start: "2017.09",
            end: "2017.12"
        },
        content: "융합 KWIX 수행"
    },
    {
        period: {
            start: "2018.07",
            end: "2018.08"
        },
        content: "럭스로보 인턴십"
    },
    {
        period: {
            start:"2018.09",
        },
        content: "리눅스 마스터 2급 취득"
    },
    {
        period: {
            start: "2019.07",
            end: "2019.12"
        },
        content: "부스트캠프 2019 수료"
    },
    {
        period: {
            start: "2020.02",
            end: "2020.03"
        },
        content: "NAVER 인턴십"
    }
];

export const History: FunctionComponent = function() {
    const title = "HISTORY";
    const historyParagraph = histories.map((history, index) => {
        const start = history.period.start;
        const end = history.period?.end;
        const content = history.content;
         return (
             <p key={index}>{start}{end ? ` ~ ${end}` : ''} - {content}</p>
         )
    });

    return (
        <HistoryStyle className="history">
            <SubTitle title={title}/>
            {historyParagraph}
        </HistoryStyle>
    );
};
