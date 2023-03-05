import Account from './models/Accounts';
import Currency from './models/Currencies';
import Transfer from './models/Transfers';
import User from './models/Users';

const isDev = process.env.NODE_ENV === 'local';

const dbInit = (): void => {
  User.sync({ alter: isDev });
  Account.sync({ alter: isDev });
  Transfer.sync({ alter: isDev });
  Currency.sync({ alter: isDev });
};
export default dbInit;
