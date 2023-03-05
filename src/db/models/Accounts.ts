import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import User from './Users';
import Currency from './Currencies';
// import Currency from './Currencies';

interface AccountAttributes {
  id: number;
  userId: number;
  currencyId: number;
  balance: number;
}

class Account extends Model<AccountAttributes, AccountInput> implements AccountAttributes {
  public id!: number;
  public userId!: number;
  public currencyId!: number;
  public balance!: number;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;
}

Account.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: User,
      key: 'id'
    }
  },
  currencyId: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Currency,
      key: 'id'
    }
  },
  balance: {
    type: DataTypes.FLOAT
  },
}, {
  sequelize: sequelizeConnection,
});

export type AccountInput = Optional<AccountAttributes, 'id'>;
export type AccountOuput = Required<AccountAttributes>;

export default Account;
