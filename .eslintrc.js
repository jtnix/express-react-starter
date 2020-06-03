module.exports = {
  env: { browser: true, es6: true, jest: true, node: true
  },
  extends: [
    'plugin:prettier/recommended',
    'prettier',
    // 'prettier/react',
    'eslint:recommended',
    'plugin:react/recommended',
    // 'standard'
  ],
  parser: 'babel-eslint',
  //   parserOptions: {
  //     ecmaVersion: 2018,
  //     sourceType: 'module',
  //     ecmaFeatures: {
  //       jsx: true
  //     }
  //   },
  plugins: ['prettier', 'import', 'node'
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'
    ],
    'prettier/prettier': 'error',
    // 'no-unused-vars': 'error'
  },
};
