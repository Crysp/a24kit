import React from 'react';
export declare type SocialType = 'fb' | 'tw' | 'gp' | 'tg' | 'wa' | 'vk' | 'ok';
export interface Props {
    type: SocialType;
    shareUrl: string;
    size: 'small' | 'large';
    windowWidth: number;
    windowHeight: number;
}
export default class SocialButton extends React.Component<Props> {
    static defaultProps: {
        shareUrl: string;
        size: string;
        windowWidth: number;
        windowHeight: number;
    };
    onClick: (e: any) => void;
    render(): JSX.Element;
}
