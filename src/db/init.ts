import Account from './models/Accounts';
import Currency from './models/Currencies';
import Transfer from './models/Transfers';
import User from './models/Users';

const dbInit = (): void => {
  User.sync();
  Currency.sync();
  Account.sync();
  Transfer.sync();
};
export default dbInit;
