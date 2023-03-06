import Account from '~db/models/Accounts';

export const checkAccountFounds = async (accountFrom: number): Promise<number | undefined> => {
  const foundAccount = await Account.findByPk(accountFrom, { attributes: ['balance'] });
  return foundAccount?.balance;
};

export const updatesAvailableFounds = async (accountFrom: number, balance: number): Promise<void> => {
  await Account.update({ balance: balance }, { where: { id: accountFrom } });
  return;
};
