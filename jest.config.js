module.exports = {
  roots: ["<rootDir>/test", "<rootDir>/src"],
  modulePaths: ["<rootDir>/src/", "<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  testEnvironment: "node",
  preset: "ts-jest",
  forceExit: true,
};
