/* eslint-disable @typescript-eslint/no-var-requires */
const { compilerOptions } = require('./tsconfig.paths');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  // rootDir: './',
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: {
    '~config(.*)': '<rootDir>/src/config/$1',
    '~constants(.*)': '<rootDir>/src/constants/$1',
    '~db(.*)': '<rootDir>/src/db/$1',
    '~loaders(.*)': '<rootDir>/src/loaders/$1',
    '~api(.*)': '<rootDir>/src/api/$1',
    '~app': '<rootDir>/src/app',
    '~tests(.*)': '<rootDir>/tests/$1',
  },
  setupFiles: ['<rootDir>/src/tests/setEnvVars.js'],
  testPathIgnorePatterns: ['dist/'],
  testTimeout: 5000,
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  }
};
