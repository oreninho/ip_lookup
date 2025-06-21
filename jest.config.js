module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['ts','tsx','js','jsx','json'],
    transform: {
        '^.+\\.[tj]sx?$': 'ts-jest'
    },
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js'
    ],
    collectCoverage: true,
    coverageDirectory: 'coverage',
    // ONLY look in **/__tests__** folders, and only *.test.ts, *.test.tsx, etc.
    testMatch: [
        '<rootDir>/src/**/__tests__/**/*.test.[jt]s?(x)'
    ],
    moduleNameMapper: {
        // Handle CSS and SCSS imports:
        '\\.(css|scss)$': 'identity-obj-proxy',
    },
}
