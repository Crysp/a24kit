import React from 'react';
import { getShareLink } from '../lib/social';
import SocialButton, { SocialType } from '../SocialButton';
import List from './styled';

export interface SocialButtonGroupProps {
    items: SocialType[]
    size: 'small' | 'large'
    shareUrl: string
}

const SocialButtonGroup: React.FunctionComponent<SocialButtonGroupProps> = (props) => {
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

SocialButtonGroup.defaultProps = {
    size: 'large',
};

export default SocialButtonGroup;
