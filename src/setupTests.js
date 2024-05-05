// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// src/setupTests.js
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets up a default mock for all axios calls in your tests
const apiMock = new MockAdapter(axios);
export default apiMock;

// Optionally reset mocks after each test if needed
beforeEach(() => {
    apiMock.reset();
});
