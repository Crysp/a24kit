import React from 'react';
import PropTypes from 'prop-types';
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


export default class SocialButton extends React.Component {
    static propTypes = {
        /**
         * Тип иконки
         */
        type: PropTypes.oneOf(['fb', 'tw', 'gp', 'tg', 'wa', 'vk', 'ok']).isRequired,
        /**
         * Share-ссылка социальной сети
         */
        shareUrl: PropTypes.string,
        /**
         * Размер иконки
         */
        size: PropTypes.oneOf(['small', 'large']),
        /**
         * Ширина создаваемого окна
         */
        windowWidth: PropTypes.number,
        /**
         * Высота создаваемого окна
         */
        windowHeight: PropTypes.number,
    };

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
