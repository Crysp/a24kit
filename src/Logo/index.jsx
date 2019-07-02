import React from 'react';
import PropTypes from 'prop-types';
import { A24, SB } from './Icon';

export default class Logo extends React.PureComponent {
    static propTypes = {
        mode: PropTypes.oneOf(['light', 'dark', 'blue']),
        project: PropTypes.string,
    };

    static defaultProps = {
        mode: 'light',
        project: 'author24',
    };

    modeColor = (mode) => {
        const colors = {
            dark: '#333',
            light: '#fff',
            blue: '#4786c8',
        };
        return colors[mode];
    };

    render() {
        const {
            mode,
            project,
            ...other
        } = this.props;
        const color = this.modeColor(mode);

        return (project === 'author24')
            ? <A24 style={{ color }} {...other} />
            : <SB style={{ color }} {...other} />;
    }
}
