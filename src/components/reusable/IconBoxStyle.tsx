import React from 'react';
import { Card, IconButton } from '@mui/material';

type IconBoxStyleProps = {
  iconPath: string;
  iconLabel: string;
  onClick: () => void
}

const IconBoxStyle: React.FC<IconBoxStyleProps> = ({ iconPath, iconLabel, onClick}: IconBoxStyleProps) => (
  <IconButton 
    aria-label={ iconLabel } 
    data-testid= { iconLabel }
    onClick={onClick}
    sx={{
      width:"70%"
    }}
  >
    <Card
      component="img"
      src={ iconPath }
      sx={{
        backgroundColor: (theme) => theme.palette.common.white,
        border: '3px solid',
        borderColor: (theme) => theme.palette.common.black,
        borderRadius: '10px',
        boxShadow: '10px 10px 10px rgba(0,0,0,0.25)',
        width: "100%"
      }}
    >
    </Card>
  </IconButton>
);

export default IconBoxStyle;

