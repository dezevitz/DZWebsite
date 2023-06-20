import React from 'react';
import { render, screen } from '@testing-library/react';
import theme from '../../../utils/theme';
import { ThemeProvider } from '@mui/material/styles';
import Header from '../Header';

test('renders all expected elements', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );

  // Is the headshot visible?
  expect(screen.getByTestId("Profile")).toBeInTheDocument();
    
  // Is the Header "Danielle Zevitz" visible on the screen
  const name = "Hi! I'm Danielle Zevitz!"
  expect(screen.getByText(name)).toBeInTheDocument();

  // Is Linkedin Icon Visible?
  expect(screen.getByTestId("LinkedIn")).toBeInTheDocument();

  // Is Email Icon Visible?
  expect(screen.getByTestId("Gmail")).toBeInTheDocument();
});