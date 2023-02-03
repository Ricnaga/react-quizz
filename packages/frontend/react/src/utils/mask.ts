export const maskString = (value: string, pattern: string) => {
  if (!value ?? !pattern) return '--';

  let i = 0;

  const v = value.toString();

  // eslint-disable-next-line no-plusplus
  return pattern.replace(/#/g, () => v[i++]).replace(/undefined/g, '');
};

// maskString(value, '(##) #####-####')
