module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, {extensions: ['.jsx', '.tsx']}],

        'no-shadow': 'off',
        'no-undef': 'off',
        react,
      },
    },
  ],
};
