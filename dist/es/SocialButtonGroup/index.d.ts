import React from 'react';
import { SocialType } from '../SocialButton';
export interface SocialButtonGroupProps {
    items: SocialType[];
    size: 'small' | 'large';
    shareUrl: string;
}
declare const SocialButtonGroup: React.FunctionComponent<SocialButtonGroupProps>;
export default SocialButtonGroup;
