import { describe, test, afterAll, expect } from '@jest/globals';
import { login, userSignup } from '~api/services/auth';
import { faker } from '@faker-js/faker';
import User from '~db/models/Users';
import { AUTHENTICATION_FAIL, USER_EMAIL_EXIST_ERROR } from '~api/errors/authentication';
import { findUserByUsermail } from '~api/repositories/users';

const loginUser = {
  name: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password()
} as User;

describe('Auth service test Success cases', () => {
  afterAll(done => {
    done();
  });
  test('userSignup - User creation with correct data', async() => {
    const user = {
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    } as User;

    await userSignup(user);

    const storedUser = await findUserByUsermail(user);
    expect(storedUser).toBeTruthy();
  });
});

describe('Auth service test Error cases', () => {
  afterAll(done => {
    done();
  });
  test('userSignup - User creation with duplicated email', async() => {
    const user = {
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    } as User;

    const user2 = {
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: user.email,
      password: faker.internet.password()
    } as User;

    await userSignup(user);
    await userSignup(user2).catch(err => {
      expect(err).toBeDefined();
      expect(err.internalCode).toEqual(USER_EMAIL_EXIST_ERROR);
    });
  });

  test('login - User login with invalid params', async() => {
    loginUser.password = 'abc123';

    await login(loginUser).catch(err => {
      expect(err).toBeDefined();
      expect(err.internalCode).toEqual(AUTHENTICATION_FAIL);
    });
  });
});
