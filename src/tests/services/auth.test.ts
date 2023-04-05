import { describe, expect, test, afterAll } from '@jest/globals';
import { userSignup } from '~api/services/auth';
import { faker } from '@faker-js/faker';
import User from '~db/models/Users';
import { findUserByUsermail } from '~api/repositories/users';

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
    expect(storedUser).toBeDefined();
  });
});
