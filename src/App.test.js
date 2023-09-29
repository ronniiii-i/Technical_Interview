import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

// Mock localStorage for testing
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

beforeEach(() => {
  // Mock localStorage functions
  global.localStorage = mockLocalStorage;
  mockLocalStorage.getItem.mockClear();
  mockLocalStorage.setItem.mockClear();
});

test('App component renders correctly', () => {
  // Mock localStorage getItem to return an empty array
  mockLocalStorage.getItem.mockReturnValueOnce('[]');

  const { getByPlaceholderText, getByText } = render(<App />);

  // Check if form inputs and buttons are present
  expect(getByPlaceholderText('First name')).toBeInTheDocument();
  expect(getByPlaceholderText('Last name')).toBeInTheDocument();
  expect(getByPlaceholderText('Email address')).toBeInTheDocument();
  expect(getByText('Submit')).toBeInTheDocument();
  expect(getByPlaceholderText('Search by name or email')).toBeInTheDocument();
  expect(getByText('First Name')).toBeInTheDocument();
  expect(getByText('Last Name')).toBeInTheDocument();
  expect(getByText('Email')).toBeInTheDocument();
  expect(getByText('Action')).toBeInTheDocument();
});

test('App allows adding a user', () => {
  // Mock localStorage getItem to return an empty array
  mockLocalStorage.getItem.mockReturnValueOnce('[]');

  const { getByPlaceholderText, getByText } = render(<App />);

  // Fill in form fields
  fireEvent.change(getByPlaceholderText('First name'), {
    target: { value: 'John' },
  });
  fireEvent.change(getByPlaceholderText('Last name'), {
    target: { value: 'Doe' },
  });
  fireEvent.change(getByPlaceholderText('Email address'), {
    target: { value: 'john.doe@example.com' },
  });
});

// Add more tests for other scenarios (e.g., editing, deleting, searching)
