module.exports = {
    roots: ["<rootDir>/test"],
    verbose: true,
    setupFiles: [
        "./test/setupTests.js"
    ],
    setupFilesAfterEnv: ["<rootDir>test/setupTests.js"],
    snapshotSerializers: [
        "enzyme-to-json/serializer"
    ],
    moduleFileExtensions: ["ts", "tsx", "js"],
};