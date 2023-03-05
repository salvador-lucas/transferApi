import { DataTypes, Model, Optional } from 'sequelize';
import sequelizeConnection from '../config';

interface CurrencyAttributes {
  id: number;
  code: number;
  rate: number;
}

class Currency extends Model<CurrencyAttributes, CurrencyInput> implements CurrencyAttributes {
  public id!: number;
  public code!: number;
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
  }
}, {
  sequelize: sequelizeConnection,
});

export type CurrencyInput = Optional<CurrencyAttributes, 'id'>;
export type CurrencyOuput = Required<CurrencyAttributes>;

export default Currency;
