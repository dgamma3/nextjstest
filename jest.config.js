module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',  // Ensure jsdom is the test environment
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};