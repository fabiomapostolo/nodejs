module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'consistent-return': 'off',
        'no-console': 'off',
        'import/no-unresolved': 'off',
        'no-underscore-dongle': 'off',
        'prefer-promise-reject-errors': 'off',
        'func-names': 'off',
        'new-cap': 'off',
        'no-shadow': 'off',
        'no-unused-expressions': 'off',
        'no-return-assign': 'off'
    }
};