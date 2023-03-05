/* eslint-disable max-lines */
import { Config } from './types';
import dotenv from 'dotenv';

dotenv.config();

const generateConfig = (): Config => {
  const missingKeys: string[] = [];

  const getEnvVar = (key: string, defaultValue?: string): string => {
    if (!process.env[key] && defaultValue === undefined) {
      missingKeys.push(key);
    }
    return (process.env[key] || defaultValue) as string;
  };

  const environment = 'local';

  const config: Config = {
    environment,
    database: {
      connection: {
        port: Number(getEnvVar('DB_PORT', '3306')),
        host: getEnvVar('DB_HOSTNAME'),
        user: getEnvVar('DB_USERNAME'),
        password: getEnvVar('DB_PASS'),
        database: getEnvVar('DB_NAME'),
        driver: getEnvVar('DB_DRIVER')
      },
      connectionTimeout: Number(getEnvVar('DB_CONNECTION_TIMEOUT', '10000'))
    },
    api: {
      baseUrl: getEnvVar('API_BASE_URL'),
      prefix: '/',
      bodySizeLimit: Number(getEnvVar('API_BODY_SIZE_LIMIT', '10mb')),
      parameterLimit: Number(getEnvVar('API_PARAMETER_LIMIT', '10000')),
      port: Number(getEnvVar('API_LOCAL_PORT', '3001')),
      fixerApiKey: getEnvVar('FIXER_API_KEY'),
    }
  };

  if (missingKeys.length) {
    throw new Error(`The following environment variables are missing: ${missingKeys}`);
  }
  return config;
};

export default generateConfig();
