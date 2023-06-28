import React from 'react';
import Box from '@mui/material/Box';

type BoxStyleProps = {
  children: React.ReactNode
}

const BoxStyle: React.FC<BoxStyleProps> = ({ children }: BoxStyleProps) => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.secondary.main,
      border: '5px solid',
      borderColor: (theme) => theme.palette.common.black,
      borderRadius: '20px',
      boxShadow: '10px 10px 10px rgba(0,0,0,0.25)'
    }}
  >
    {children}
  </Box>
);

export default BoxStyle;

