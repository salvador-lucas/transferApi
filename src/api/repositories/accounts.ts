import Account from '~db/models/Accounts';

export const checkAccountFounds = async (accountFrom: number): Promise<number | undefined> => {
  const foundAccount = await Account.findByPk(accountFrom, { attributes: ['balance'] });
  return foundAccount?.balance;
};

export const updatesAvailableFounds = async (accountFrom: number, balance: number): Promise<void> => {
  await Account.update({ balance: balance }, { where: { id: accountFrom } });
  return;
};

export const getUserAccounts = async (userId: number): Promise<number[]> => {
  console.info('getting user accounts from database');
  const accounts = await Account.findAll({ where:{ userId } });
  console.info('finished getting user accounts from database');
  const accountIds = accounts.map(ac => ac.id);
  return accountIds;
};
