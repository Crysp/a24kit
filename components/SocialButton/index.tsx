import React from 'react';
import {
    FacebookHollow,
    TwitterHollow,
    GooglePlusHollow,
    TelegramHollow,
    WhatsappHollow,
    VkontakteHollow,
    OdnoklassnikiHollow,
} from '../Icon';
import Link from './styled';


function getIcon(type) {
    switch (type) {
        case 'tw': return <TwitterHollow />;
        case 'gp': return <GooglePlusHollow />;
        case 'tg': return <TelegramHollow />;
        case 'wa': return <WhatsappHollow />;
        case 'vk': return <VkontakteHollow />;
        case 'ok': return <OdnoklassnikiHollow />;
        case 'fb':
        default: return <FacebookHollow />;
    }
}

export type SocialType = 'fb' | 'tw' | 'gp' | 'tg' | 'wa' | 'vk' | 'ok';

export interface Props {
    type: SocialType
    shareUrl: string
    size: 'small' | 'large'
    windowWidth: number
    windowHeight: number
}

export default class SocialButton extends React.Component<Props> {
    static defaultProps = {
        shareUrl: '',
        size: 'large',
        windowWidth: 800,
        windowHeight: 600,
    };

    onClick = (e) => {
        const { shareUrl, windowWidth, windowHeight } = this.props;
        window.open(shareUrl, '', `
            menubar=no,
            toolbar=no,
            resizable=yes,
            scrollbars=yes,
            height=${windowHeight},
            width=${windowWidth}
            `);
        e.preventDefault();
    };

    render() {
        const { type, shareUrl, size } = this.props;
        return (
            <Link size={size} type={type} href={shareUrl} onClick={this.onClick}>
                {getIcon(type)}
            </Link>
        );
    }
}
