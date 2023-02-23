module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',

    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    overrides: [
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx', '.ts'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        indent: [2, 4],
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'linebreak-style': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'no-shadow': 'off',
        'no-undef': 'warn',
        'no-underscore-dangle': 'off',
    },
};
