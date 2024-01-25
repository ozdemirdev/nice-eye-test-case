module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    "import/prefer-default-export": 0,
    semi: 0,
    
  },
};