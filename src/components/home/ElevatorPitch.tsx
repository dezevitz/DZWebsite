import BoxStyle from '../reusable/BoxStyle';
import { ABOUT_ME, ELEVATOR_PITCH_END, ELEVATOR_PITCH_START, GITHUB, LINKEDIN } from '../../utils/strings';
import React from 'react';
import { Box } from '@mui/system';
import HeaderStyle from '../reusable/HeaderStyle';
import theme from '../../utils/theme';
import { Link, Typography } from '@mui/material';

function ElevatorPitch() {    
    return (
        <Box padding='20px'>
            <HeaderStyle text={ABOUT_ME} color={theme.palette.primary.light}/>
            <div style={{marginBottom: "20px"}}></div>
            <BoxStyle>
                <Typography variant='body1' padding='10px'>
                    { ELEVATOR_PITCH_START }
                    <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer" color="#3366CC">LinkedIn</Link> 
                    { " and " }
                    <Link href={GITHUB} target="_blank" rel="noopener noreferrer" color="#3366CC">Github</Link>
                    { ELEVATOR_PITCH_END }
                </Typography>
            </BoxStyle> 
        </Box>
    )
}

export default ElevatorPitch