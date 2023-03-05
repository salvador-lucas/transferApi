import { email, password } from './commons';

export const signupSchema = {
  body: {
    type: 'object',
    required: ['name', 'lastname', 'email', 'password'],
    properties: {
      name: {
        type: 'string',
      },
      lastname: {
        type: 'string',
      },
      email,
      password
    }
  }
};

export const loginSchema = {
  body: {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email,
      password
    }
  }
};
