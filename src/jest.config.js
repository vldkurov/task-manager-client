module.exports = {
    moduleNameMapper: {
        '^axios$': 'axios/dist/node/axios.cjs'
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        '/node_modules/(?!axios).+\\.js$', // Exclude node_modules except for axios if needed, adjust as per your previous config
    ],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'] // If you use this for global setups like '@testing-library/jest-dom'
};
