module.exports = {
	moduleDirectories: ['node_modules', 'src'],
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
	coverageReporters: ['html'],
	coverageDirectory: 'report',
	testPathIgnorePatterns: ['./node_modules/'],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: 80,
		},
	},
	collectCoverageFrom: [
		'**/*.{ts, tsx}',
		'!**/types/**',
		'!**/utils/axios.ts',
		'!**/utils/test-utils.ts',
		'!**/assets/**',
		'!**/node_modules/**',
		'!**/__tests__/**',
	],
};
