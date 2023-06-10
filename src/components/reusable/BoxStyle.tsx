import React from 'react';
import Box from '@mui/material/Box';
import Typography, { TypographyProps, TypographyPropsVariantOverrides, TypographyTypeMap } from '@mui/material/Typography';
import { OverridableStringUnion } from '@mui/types';
import { Variant } from '@testing-library/react';

type BoxStyleProps = {
  text: string;
  textVariant?: TypographyTypeMap["props"]["variant"];
}

const BoxStyle: React.FC<BoxStyleProps> = ({ text, textVariant = "body1" }: BoxStyleProps) => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.secondary.main,
      border: '5px solid',
      borderColor: (theme) => theme.palette.common.black,
      borderRadius: '20px',
      boxShadow: '10px 10px 10px rgba(0,0,0,0.25)'
    }}
  >
    <Typography variant={ textVariant } padding='10px'>
      {text}
    </Typography>
  </Box>
);

export default BoxStyle;

