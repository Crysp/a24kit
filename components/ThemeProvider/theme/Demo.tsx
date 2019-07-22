import React from 'react';
import { tokens } from './tokens';

export default class Demo extends React.PureComponent {
    render() {
        return (
            <div>
                <h2>Palette</h2>
                <div
                    style={{
                        display: 'grid',
                        gridAutoRows: 'auto',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                        gridGap: '12px',
                    }}
                >
                    {Object.keys(tokens.palette).map(name => (
                        <div
                            style={{
                                boxSizing: 'border-box',
                                width: '100%',
                                height: 80,
                                backgroundColor: tokens.palette[name],
                                color: '#fff',
                                padding: 12,
                                textAlign: 'right',
                                fontWeight: 700,
                                borderRadius: 4,
                            }}
                        >
                            {name}
                        </div>
                    ))}
                </div>
                <h2>Gradients</h2>
                <div
                    style={{
                        display: 'grid',
                        gridAutoRows: 'auto',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                        gridGap: '12px',
                    }}
                >
                    {Object.keys(tokens.gradient).map(name => (
                        <div
                            style={{
                                boxSizing: 'border-box',
                                width: '100%',
                                height: 80,
                                background: tokens.gradient[name],
                                color: '#fff',
                                padding: 12,
                                textAlign: 'right',
                                fontWeight: 700,
                                borderRadius: 4,
                            }}
                        >
                            {name}
                        </div>
                    ))}
                </div>
                <h2>Shadows</h2>
                <div
                    style={{
                        display: 'grid',
                        gridAutoRows: 'auto',
                        gridTemplateColumns: '1fr 1fr',
                        gridGap: 100,
                    }}
                >
                    {Object.keys(tokens.shadows).map(name => (
                        <div
                            style={{
                                boxSizing: 'border-box',
                                width: '100%',
                                height: 100,
                                color: '#333',
                                padding: 12,
                                textAlign: 'right',
                                fontWeight: 700,
                                borderRadius: 4,
                                boxShadow: tokens.shadows[name],
                            }}
                        >
                            {name}
                        </div>
                    ))}
                </div>
                <h2>Spacers</h2>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {Object.keys(tokens.spacers).map(name => (
                        <div>
                            <span>{`${name} = ${tokens.spacers[name]}`}</span>
                            <div
                                style={{
                                    boxSizing: 'border-box',
                                    width: tokens.spacers[name],
                                    height: tokens.spacers[name],
                                    color: '#333',
                                    textAlign: 'right',
                                    fontWeight: 700,
                                    border: '1px solid rgba(237, 20, 61, 0.4)',
                                    backgroundColor: 'rgba(237, 20, 61, 0.1)',
                                }}
                            />
                        </div>
                    ))}
                </div>
                <h2>Typography</h2>
                {Object.keys(tokens.typography).map(name => (
                    <div style={{ marginBottom: 20 }}>
                        <span
                            style={{
                                fontFamily: tokens.typography[name].family,
                                fontSize: tokens.typography[name].size,
                                fontWeight: tokens.typography[name].weight,
                                lineHeight: tokens.typography[name].lineHeight,
                            }}
                        >
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        );
    }
}
