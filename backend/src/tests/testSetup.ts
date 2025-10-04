// Global test setup and configuration
import { beforeAll, afterAll, beforeEach, afterEach } from '@jest/globals';

// Global test setup
beforeAll(() => {
  // Setup code that runs once before all tests
  console.log('Starting test suite');
});

// Global test teardown
afterAll(() => {
  // Cleanup code that runs once after all tests
  console.log('Test suite completed');
});

// Setup before each test
beforeEach(() => {
  // Code that runs before each test
});

// Cleanup after each test
afterEach(() => {
  // Code that runs after each test
});
