module.exports = {
    testPathIgnorePatterns: ['/node_modules/'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],  
    transform: {
        "ˆ.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    }
}