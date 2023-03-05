/* eslint-disable no-magic-numbers */
import { DataTypes, Model, Optional } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelizeConnection from '../config';

interface UserAttributes {
  id: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
}

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
  public id!: number;
  public name!: string;
  public lastname!: string;
  public email!: string;
  public password!: string;

  // timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public readonly deletedAt!: Date;

  validPassword = (password: string): boolean => {
    return bcrypt.compareSync(password, this.password);
  };
}

User.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING
  }
}, {
  timestamps: true,
  sequelize: sequelizeConnection,
  paranoid: true,
  hooks: {
    beforeCreate: async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    beforeUpdate:async (user) => {
      if (user.password) {
        const salt = await bcrypt.genSaltSync(10, 'a');
        user.password = bcrypt.hashSync(user.password, salt);
      }
    }
  }
});

export type UserInput = Optional<UserAttributes, 'id'>;
export type UserOuput = Required<UserAttributes>;

export default User;
