module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts',
  ],
  coveragePathIgnorePatterns: [
    '\\.d\\.tsx?$',
    '/__data__/',
    '/__mock__/',
    '/__tests__/',
  ],
  errorOnDeprecated: true,
  globals: {
    'ts-jest': {
      babelConfig: false,
      tsconfig: 'tsconfig.json',
    },
  },
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  roots: [
    '<rootDir>/src',
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/lib/',
    '/node_modules/',
    '/__data__/',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(spec))\\.(jsx?|tsx?)$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
