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

export const findUserAccounts = async (userId: number, onlyIds?: boolean): Promise<number[] | Account[]> => {
  console.info('getting user accounts from database');
  const accounts = await Account.findAll({ where:{ userId } });
  console.info('finished getting user accounts from database');
  if(onlyIds)
    return  accounts.map(ac => ac.id);
  return accounts;
};

export const updatesTransactionFounds = async (accountFrom: number, balanceFrom: number, accountTo: number, balanceTo: number): Promise<void> => {
  sequelizeConnection.transaction(async (_t: Transaction) => {
    return Promise.all([
      Account.update({ balance: balanceFrom }, { where: { id: accountFrom } }),
      Account.update({ balance: balanceTo }, { where: { id: accountTo } }),
    ]);
  });
};

export const storeAccount = async (account: Account, t?: Transaction): Promise<void> => {
  console.info('saving account in database');
  await Account.create(account, { transaction: t });
  console.info('finished account transfer in database');
};

export const findAccountById = async (id: number): Promise<Account | null> => {
  return await Account.findByPk(id);
};
