import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import theme from '../../../utils/theme';
import { ThemeProvider } from '@mui/material/styles';
import QuickLinks from '../QuickLinks';
import IconBoxStyle from '../../reusable/IconBoxStyle';

test('linkedIn Button renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <QuickLinks/>
    </ThemeProvider>
  );

  const button = screen.getByTestId("LinkedIn")
  expect(button).toBeInTheDocument();
})

test('Email Button renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <QuickLinks/>
    </ThemeProvider>
  );

  const button = screen.getByTestId("Gmail")
  expect(button).toBeInTheDocument();
})

test('Resume Button renders', () => {
  render(
    <ThemeProvider theme={theme}>
      <QuickLinks/>
    </ThemeProvider>
  );

  const button = screen.getByTestId("Resume")
  expect(button).toBeInTheDocument();
})



test("clicking IconBoxStyleButton triggers action", () => {
  const handleClick = jest.fn();

  const { getByTestId } = render(
    <IconBoxStyle iconPath="" iconLabel="testButton" onClick={handleClick} />
  );

  fireEvent.click(getByTestId("testButton"));

  expect(handleClick).toHaveBeenCalled();
});