import { describe, test, afterAll, expect } from '@jest/globals';
import { userSignup } from '~api/services/auth';
import { faker } from '@faker-js/faker';
import User from '~db/models/Users';
import { findUserByUsermail } from '~api/repositories/users';
import { createAccount } from '~api/services/accounts';
import Account from '~db/models/Accounts';
import { userNotFoundError } from '~api/errors/users';
import { createOrUpdateRatesDB, getExchangeRateByCode } from '~api/repositories/currencies';
import { findUserAccounts } from '~api/repositories/accounts';
import { internalError } from '~api/errors';

describe('Accounts service test Success cases', () => {
  afterAll(done => {
    done();
  });
  test('createAccount - Account creation with correct data', async() => {
    const user = {
      name: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    } as User;

    await userSignup(user);

    const storedUser = await findUserByUsermail(user);
    if(!storedUser)
      throw userNotFoundError();

    const currencyCode = faker.finance.currencyCode();

    await createOrUpdateRatesDB({
      [currencyCode] : Number(faker.finance.amount())
    });

    const rate = await getExchangeRateByCode(currencyCode);
    if(!rate)
      throw internalError();

    const account = {
      userId: storedUser.id,
      currencyCode: currencyCode,
      balance: Number(faker.finance.amount())
    } as Account;

    await createAccount(storedUser.id, account);
    const storedAccounts = await findUserAccounts(storedUser.id);
    expect(storedAccounts).toBeDefined();
    expect(storedAccounts[0]).toHaveProperty('currencyCode');
    expect(storedAccounts[0]).toHaveProperty('balance');

  });
});
