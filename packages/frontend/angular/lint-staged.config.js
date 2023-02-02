module.exports = {
  'src/*.ts': ['yarn lint:fix', 'yarn typecheck'],
  '*.{js,json,ts,css,scss}': ['prettier --write'],
};
