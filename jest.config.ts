export default {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/mocks/fileMock.js',
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coveragePathIgnorePatterns: ['src/main.tsx'],
  collectCoverageFrom: ['src/**/*.[jt]s?(x)', '!src/**/__tests__/*'],
  coverageReporters: ['html', 'text', 'text-summary', 'cobertura'],
  moduleDirectories: ['src', 'node_modules']
};
