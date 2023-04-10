import { Transaction } from 'sequelize';
import sequelizeConnection from '~db/config';
import Account from '~db/models/Accounts';

export const checkAccountFounds = async (accountFrom: number): Promise<number | undefined> => {
  const foundAccount = await Account.findByPk(accountFrom, { attributes: ['balance'] });
  return foundAccount?.balance;
};

export const updatesAvailableFounds = async (accountFrom: number, balance: number, t?: Transaction): Promise<void> => {
  await Account.update({ balance }, { where: { id: accountFrom }, transaction: t });
};

export const getUserAccounts = async (userId: number): Promise<number[]> => {
  console.info('getting user accounts from database');
  const accounts = await Account.findAll({ where:{ userId } });
  console.info('finished getting user accounts from database');
  const accountIds = accounts.map(ac => ac.id);
  return accountIds;
};

export const updatesTransactionFounds = async (accountFrom: number, balanceFrom: number, accountTo: number, balanceTo: number): Promise<void> => {
  sequelizeConnection.transaction(async (_t: Transaction) => {
    return Promise.all([
      Account.update({ balance: balanceFrom }, { where: { id: accountFrom } }),
      Account.update({ balance: balanceTo }, { where: { id: accountTo } }),
    ]);
  });
};
