// // eslint-disable-next-line @typescript-eslint/no-var-requires
// require('dotenv').config();
import { Dialect, Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USERNAME as string;
const dbHost = process.env.DB_HOSTNAME;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASS;

const sequelizeConnection = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver
});

export default sequelizeConnection;
