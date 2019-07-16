import React from 'react';
import palette from './palette'

export default () => (
    <div style={{ display: 'flex' }}>
        {Object.keys(palette).map(name => (
            <div style={{ width: 200 }}>
                <div style={{ height: 10, backgroundColor: palette[name].primary, marginBottom: 20 }} />
                {palette[name].map(tone => (
                    <div style={{ height: 50, backgroundColor: tone }} />
                ))}
            </div>
        ))}
    </div>
);
