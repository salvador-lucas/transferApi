import { DataTypes, Model, Optional, literal } from 'sequelize';
import sequelizeConnection from '../config';

interface CurrencyAttributes {
  id: number;
  code: string;
  rate: number;
  createdAt: Date;
  updatedAt: Date;
}

class Currency extends Model<CurrencyAttributes, CurrencyInput> implements CurrencyAttributes {
  public id!: number;
  public code!: string;
  public rate!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

}

Currency.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  rate: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: literal('NOW()')
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: literal('NOW()')
  }
}, {
  sequelize: sequelizeConnection,
});

export type CurrencyInput = Optional<CurrencyAttributes, 'id' | 'updatedAt' | 'createdAt'>;
export type CurrencyOuput = Required<CurrencyAttributes>;

export default Currency;
