import React from 'react';
import theme from '../../utils/theme';
import ElevatorPitch from './ElevatorPitch';

function HomeScreen() {    
    return (
        <div
            style={{ 
                width: '100%',
                backgroundColor: theme.palette.primary.dark,
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <ElevatorPitch/>
        </div>
    )
}

export default HomeScreen;
