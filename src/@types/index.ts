import * as React from 'react';
import {IconProp} from "@fortawesome/fontawesome-svg-core";

export enum Scroll {
    up = 'scroll-up',
    down = 'scroll-down',
}

export interface MyIconProp {
    icon: IconProp;
}

export interface IconButtonProp extends MyIconProp {
    href: string;
}

export interface LogoProp {
    width: number;
}

interface BasicTitleProp {
    title: string;
}

interface BasicTextProp {
    text: string;
}

export interface ModalType extends BasicTitleProp {
    image?: string;
    content: string;
    repository?: string;
}

export interface ModalContainerProp extends ModalType {
    isOpened: boolean;
    toggleIsOpened: () => void;
}

export interface NavBarMenuItemProp extends BasicTextProp {
}

export interface ProjectType extends BasicTitleProp {
    id: number;
    thumbnail?: string;
    type: 'team' | 'personal';
    period: {
        start: string | Date;
        end?: string | Date;
    };
    skill: string[];
    description: string;
    task: string[];
    repository: string;
    onClick?: () => void;
}

export interface SkillType {
    icons: IconProp[];
    category: string;
    contents: string[];
}

export interface TagProp extends BasicTextProp {
}

export interface TagContainerProp {
    tags: BasicTextProp['text'][];
}

export type TextProp = BasicTextProp & React.HTMLAttributes<HTMLDivElement> & {
    fontSize?: number;
    textAlign?: string;
    fontFamily?: string;
    margin?: string;
    padding?: string;
    letterSpacing?: number;
}

export interface SubTitleProp extends BasicTitleProp {
}

export type TitleProp = BasicTitleProp & React.HTMLAttributes<HTMLDivElement>;
