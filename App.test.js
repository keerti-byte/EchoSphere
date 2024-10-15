import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/Welcome to StreamNest/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the sign-in button', () => {
    render(<App />);
    const buttonElement = screen.getByRole('button', { name: /Sign In with YouTube Music/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders the musician selection prompt', () => {
    render(<App />);
    const promptElement = screen.getByText(/Choose Your Favorite Musicians/i);
    expect(promptElement).toBeInTheDocument();
  });
});
