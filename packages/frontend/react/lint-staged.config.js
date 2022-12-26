module.exports = {
  '**/*.ts?(x)': ['yarn lint:fix', () => 'yarn typecheck'],
  '*.{js,jsx,ts,tsx,json}': ['prettier --write'],
};
