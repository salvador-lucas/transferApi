import moment from 'moment';
import { Op, WhereOptions } from 'sequelize';
import Account from '~db/models/Accounts';
import Transfer from '~db/models/Transfers';

export const checkAccounts = async (accountFrom: number, accountTo: number): Promise<Account[]> => {
  console.info('start find account from database');
  const usersAccounts = await Account.findAll({ where: { id: { [Op.or]: [accountFrom, accountTo] } } });
  console.info('start find account from database');
  return usersAccounts;
};

export const storeTransfer = async (transfer: Transfer): Promise<void> => {
  console.info('saving transfer in database');
  await Transfer.create(transfer);
  console.info('finished saving transfer in database');
  return;
};

export const getUserTransfers = async (accountIds: number[], dateFrom?: string, dateTo?: string, externalAccounts?: boolean): Promise<Transfer[]> => {
  const operator = externalAccounts ? Op.notIn : Op.in;

  const where: WhereOptions = {
    accountFrom: {
      [Op.in]: accountIds
    }, accountTo:{
      [operator]: accountIds
    }
  };

  if(dateFrom && moment(dateFrom).isValid()){
    where.date = { [Op.gte]: dateFrom };
  }

  if(dateTo && moment(dateTo).isValid()){
    where.date = { [Op.lte]: dateTo };
  }

  const trans = await Transfer.findAll({
    where
  });
  return trans;
};
