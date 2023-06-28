import React from 'react';
import { render, screen } from '@testing-library/react';
import ElevatorPitch from '../ElevatorPitch';
import theme from '../../../utils/theme';
import { ThemeProvider } from '@mui/material/styles';

test('renders all expected elements', () => {
  render(
    <ThemeProvider theme={theme}>
      <ElevatorPitch />
    </ThemeProvider>
  );

  // Is the Header "Danielle Zevitz" visible on the screen
  const name = "About Me:"
  expect(screen.getByText(name)).toBeInTheDocument();

  // Are pitch links on screen
  const linkedin = "LinkedIn"
  expect(screen.getByText(linkedin)).toBeInTheDocument();

  const github = "Github"
  expect(screen.getByText(github)).toBeInTheDocument();
});