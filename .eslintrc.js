module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'prettier'],
  rules: {
    'max-len': [
      'error',
      {
        code: 140,
        tabWidth: 2,
        comments: 120,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
  },
};
