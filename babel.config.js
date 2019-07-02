module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                browsers: ['last 2 versions']
            }
        }],
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-proposal-export-default-from',
        '@babel/plugin-proposal-object-rest-spread',
        ['@babel/plugin-proposal-class-properties', {
            loose: true
        }]
    ]
};
