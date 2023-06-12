import BoxStyle from '../reusable/BoxStyle';
import { ABOUT_ME, ELEVATOR_PITCH } from '../../utils/strings';
import React from 'react';
import { Box } from '@mui/system';
import HeaderStyle from '../reusable/HeaderStyle';
import theme from '../../utils/theme';

function ElevatorPitch() {    
    return (
        <Box padding='20px'>
            <HeaderStyle text={ABOUT_ME} color={theme.palette.primary.light}/>
            <div style={{marginBottom: "20px"}}></div>
            <BoxStyle text={ELEVATOR_PITCH}/>
        </Box>
    )
}

export default ElevatorPitch