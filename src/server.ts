// import config from './config';
import config from './config';
import app from './app';

const PORT = config.api.port;

import dbInit from './db/init';
import sequelizeConnection from '~db/config';

(function startServer(): void {
  try {
    sequelizeConnection.authenticate();
    console.info('Connection has been established successfully');
  } catch (error) {
    console.error('Unable to connect to the database: ', error);
  }

  try {
    dbInit(); //initialize the db schema
    app.listen(PORT);
    console.info(`Server listening on port ${PORT} 🙂`);
  } catch (error) {
    console.error(error);
  }
})();
