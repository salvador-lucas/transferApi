/* eslint-disable max-lines */
interface DBConnection {
  port: number;
  host: string;
  user: string;
  password: string;
  database: string;
  driver: string;
}

interface DBConfig {
  connection: DBConnection;
  connectionTimeout: number;
}

interface APIConfig {
  prefix: string;
  baseUrl: string;
  bodySizeLimit: number;
  parameterLimit: number;
  port: number;
  fixerApiKey: string;
}

export interface Config {
  environment: string;
  database: DBConfig;
  api: APIConfig;
}
