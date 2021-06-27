module.exports = {
  clearMocks: true,
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'babel',
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // The test environment that will be used for testing
  testEnvironment: 'node',
  // A map from regular expressions to paths to transformers
  transform: {
    '.[jt]s': 'ts-jest',
  },

  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: ['**/tests/?(*.)+(spec|test).+(ts|tsx|js|jsx)', '**/src/?(*.)+(spec|test).+(ts|tsx|js|jsx)'],
  verbose: true,
};
