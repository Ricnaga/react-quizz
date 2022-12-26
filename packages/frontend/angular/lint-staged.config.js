module.exports = {
  '**/*.ts?(x)': ['yarn lint:fix', 'yarn typecheck'],
  '*.{js,json,ts,css,scss}': ['prettier --write'],
};
