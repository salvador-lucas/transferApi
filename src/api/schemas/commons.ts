
export const email = {
  type: 'string',
  format: 'email',
  transform: ['toLowerCase'],
  errorMessage: {
    format: 'email format is invalid'
  }
};

export const password = {
  type: 'string',
  pattern: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,12}$',
  format: 'password',
  errorMessage: {
    pattern:
      'Password error: It must contain between 6 and 12 characters, at least one uppercase letter, one lowercase letter, one number and one special character'
  }
};
