import React from 'react';
import theme from '../../utils/theme';
import ElevatorPitch from './ElevatorPitch';
import Header from './Header';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

function HomeScreen() {    
    return (
        <Box
            sx={{ 
                width: '100%',
                backgroundColor: theme.palette.primary.dark,
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Header/>
            <Divider sx={{
                borderBottomWidth:"5px",
                borderColor: (theme) => theme.palette.primary.main,
                borderRadius: "20px",
                margin: '10px',
            }}/>
            <ElevatorPitch/>
        </Box>
    )
}

export default HomeScreen;
