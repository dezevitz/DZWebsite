import React from 'react';
import { Card, IconButton } from '@mui/material';
import theme from '../../utils/theme';

type IconBoxStyleProps = {
  iconPath: string;
  iconLabel: string;
  onClick: () => void;
  color?: string
}

const IconBoxStyle: React.FC<IconBoxStyleProps> = ({ iconPath, iconLabel, onClick, color = theme.palette.common.white}: IconBoxStyleProps) => (
  <IconButton 
    aria-label={ iconLabel } 
    data-testid= { iconLabel }
    onClick={onClick}
  >
    <Card
      component="img"
      src={ iconPath }
      sx={{
        backgroundColor: color,
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

