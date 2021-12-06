export const alphabetOnlyValidation = (input: string): boolean => {
  const pattern = /^[A-Za-z]+$/;

  return pattern.test(input);
};

export const numericOnlyValidation = (input: string): boolean => {
  const pattern = /^[0-9]+$/;

  return pattern.test(input);
};

export const emailValidation = (input: string): boolean => {
  const pattern = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  return pattern.test(input);
};
