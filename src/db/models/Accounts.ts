import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import User from './Users';

interface AccountAttributes {
  id: number;
  userId: number;
  currencyCode: number;
  balance: number;
}

class Account extends Model<AccountAttributes, AccountInput> implements AccountAttributes {
  public id!: number;
  public userId!: number;
  public currencyCode!: number;
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
  currencyCode: {
    type: DataTypes.STRING
  },
  balance: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
}, {
  sequelize: sequelizeConnection,
});

export type AccountInput = Optional<AccountAttributes, 'id'>;
export type AccountOuput = Required<AccountAttributes>;

export default Account;
