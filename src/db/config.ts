import { Dialect, Sequelize } from 'sequelize';
import cls from 'cls-hooked';

export const namespace = cls.createNamespace('transfers');
const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USERNAME as string;
const dbHost = process.env.DB_HOSTNAME as string;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASS as string;

Sequelize.useCLS(namespace);
const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
});

export default sequelizeConnection;
