import { userNotFoundError } from '~api/errors/users';
import { findUserAccounts, storeAccount } from '~api/repositories/accounts';
import { findUserById } from '~api/repositories/users';
import Account from '~db/models/Accounts';

export const createAccount = async (userId: number, account: Account): Promise<void> => {
  const userById = await findUserById(userId);
  if(!userById)
    throw userNotFoundError();

  account.userId = userId;
  await storeAccount(account);
};

export const getUserAccounts = async (userId: number): Promise<Account[]> => {
  const userById = await findUserById(userId);
  if(!userById)
    throw userNotFoundError();

  const accounts = await findUserAccounts(userId) as Account[];
  return accounts;
};
