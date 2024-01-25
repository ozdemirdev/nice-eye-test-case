module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    "import/prefer-default-export": "off",
    
    semi: 0,
    
  },
};