import request from 'supertest';
import { describe, test, expect } from '@jest/globals';
import { faker } from '@faker-js/faker';
import app from '~app';
import { STATUS_CODES } from '~constants';
import User from '~db/models/Users';
import { INVALID_SCHEMA } from '~api/errors';

const signupPayload = {
  name: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  password: '123Asdf!'
} as Partial<User>;

const url = '/auth/';

describe('Auth controller tests Success cases', () => {
  test('/auth/signup - User creation with correct data', async() => {
    const response = await request(app)
      .post(`${url}/signup`)
      .send(signupPayload);
    expect(response).toBeDefined();
    expect(response.statusCode).toBe(STATUS_CODES.CREATED);
  });
});

describe('Auth controller tests Error cases', () => {
  test('/auth/signup - User creation with missing password', async() => {
    const missingParamPayload = { ...signupPayload };
    delete missingParamPayload.password;

    const response = await request(app)
      .post(`${url}/signup`)
      .send(missingParamPayload);

    expect(response.statusCode).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY);
    expect(response).toBeDefined();
    expect(response.body.internal_code).toEqual(INVALID_SCHEMA);
  });

  test('/auth/signup - User creation with missing password', async() => {
    const missingParamPayload = { ...signupPayload };
    delete missingParamPayload.email;

    const response = await request(app)
      .post(`${url}/signup`)
      .send(missingParamPayload);

    expect(response.statusCode).toBe(STATUS_CODES.UNPROCESSABLE_ENTITY);
    expect(response).toBeDefined();
    expect(response.body.internal_code).toEqual(INVALID_SCHEMA);
  });
});
