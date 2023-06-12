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
  expect(screen.getByRole("img")).toBeInTheDocument();
    
  // Is the Header "Danielle Zevitz" visible on the screen
  const name = "Hi! I'm Danielle Zevitz!"
  expect(screen.getByText(name)).toBeInTheDocument();

});