module.exports = {
    testPathIgnorePatterns: ['/node_modules/'],
    transform: {
        "ˆ.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    }
}