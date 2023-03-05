import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';
import Account from './Accounts';
// import Account from './Accounts';

interface TransferAttributes {
  id: number;
  accountFrom: number;
  accountTo: number;
  amount: number;
  date: Date;
  description: string;
}

class Transfer extends Model<TransferAttributes, TransferInput> implements TransferAttributes {
  public id!: number;
  public accountFrom!: number;
  public accountTo!: number;
  public amount!: number;
  public date!: Date;
  public description!: string;

}

Transfer.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  accountFrom: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Account,
      key: 'id'
    }
  },
  accountTo: {
    type: DataTypes.INTEGER.UNSIGNED,
    references: {
      model: Account,
      key: 'id'
    }
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
}, {
  sequelize: sequelizeConnection,
});

export type TransferInput = Optional<TransferAttributes, 'id'>;
export type TransferOuput = Required<TransferAttributes>;

export default Transfer;
