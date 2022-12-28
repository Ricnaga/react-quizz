module.exports = {
  '**/*.ts': ['yarn lint:fix', () => 'yarn typecheck'],
  '*.{js,ts,json}': ['prettier --write'],
};
