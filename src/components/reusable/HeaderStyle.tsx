import React from 'react';
import Typography, { TypographyTypeMap } from '@mui/material/Typography';
import theme from '../../utils/theme';


type HeaderProps = {
  text: string;
  textVariant?: TypographyTypeMap["props"]["variant"];
  color?: string
}

const HeaderStyle: React.FC<HeaderProps> = ({ 
  text, 
  textVariant = "h2", 
  color = theme.palette.primary.light
}: HeaderProps) => (
  <Typography 
    sx={{
      WebkitTextStroke: '3px black',
      WebkitTextFillColor: color,
      textShadow: '10px 10px 10px rgba(0,0,0,0.25)',
      typography: { md: textVariant , xs:'h2' }
    }}
  >
    {text}
  </Typography>
);

export default HeaderStyle;

