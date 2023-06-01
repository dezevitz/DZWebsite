import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const BoxStyle = ({text, textVariant='body1'}) => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.colors.secondaryLight,
      border: '5px solid',
      borderColor: (theme) => theme.colors.black,
      width: '100%',
      height: 'auto',
      borderRadius: '20px',
      boxShadow: '10px 10px 10px rgba(0,0,0,0.25)'
    }}
  >
    <Typography 
      variant={textVariant}
      padding='10px'
    >
      {text}
    </Typography>
  </Box>
);

export default BoxStyle;
