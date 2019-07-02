import React from 'react';
import PropTypes from 'prop-types';
import { getShareLink } from '../lib/social';
import SocialButton from '../SocialButton';
import List from './styled';

const SocialButtonGroup = (props) => {
    const { items, size, shareUrl } = props;
    return (
        <List>
            {items.map(item => (
                <SocialButton
                    key={item}
                    shareUrl={getShareLink(item, shareUrl)}
                    size={size}
                    type={item}
                />
            ))}
        </List>
    );
};

SocialButtonGroup.propTypes = {
    /**
     * Список типов кнопок
     */
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    /**
     *  Размер иконок
     */
    size: PropTypes.oneOf(['small', 'large']),
    /**
     * Referral-ссылка пользователя
     */
    shareUrl: PropTypes.string.isRequired,
};

SocialButtonGroup.defaultProps = {
    size: 'large',
};

export default SocialButtonGroup;
