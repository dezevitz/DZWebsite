import React from 'react';
import { render, screen } from '@testing-library/react';
import ElevatorPitch from '../ElevatorPitch';
import theme from '../../../utils/theme';
import { ThemeProvider } from '@mui/material/styles';

// describe('Home Page', ()=> {
//   it('renders', ()=> {
//     render(<ElevatorPitch/>)
//   })
// })

test('renders all expected elements', () => {
  render(
    <ThemeProvider theme={theme}>
      <ElevatorPitch />
    </ThemeProvider>
  );

  // Is the headshot visible?
  expect(screen.getByRole("img")).toBeInTheDocument();

  // Is the Header "Danielle Zevitz" visible on the screen
  const name = "Danielle Zevitz"
  expect(screen.getByText(name)).toBeInTheDocument();

  // Is elevator pitch visible on screen
  const elevatorText = "Hi, my name is Danielle Zevitz! I have over a year of experience as an Android Software Engineer at Willowtree Apps, where I worked on multiple client projects, led large features, and developed comprehensive unit tests. I also have experience as a Major League Hacking Hackathon Coach, organizing and leading technical workshops and events for an international community. In addition to my work experience, I have personal projects demonstrating my skills in web and mobile development. I have a solid understanding of various programming languages and tools such as Kotlin, Java, Jetpack Compose, Git, Python, and more. What sets me apart is my past involvement in as a leader in various organizations, such as the Women of Willowtree ERG and Girls Who Code. With a strong foundation in software development, a proactive mindset, and a commitment to continuous learning, I am ready to contribute to impactful projects and make a difference. You can find more about my experience and projects on my LinkedIn (linkedin.com/in/daniellezevitz) and GitHub (github.com/dezevitz) profiles. I would love to discuss how my skills and enthusiasm can contribute to your team. Thank you!"
  expect(screen.getByText(elevatorText)).toBeInTheDocument();
});