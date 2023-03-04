import { email, password } from './commons';

export const loginSchema = {
  body: {
    type: 'object',
    required: ['username', 'password'],
    properties: {
      username: {
        ...email
      },
      password
    }
  }
};
