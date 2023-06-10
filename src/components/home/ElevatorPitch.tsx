import BoxStyle from '../reusable/BoxStyle';
import { ELEVATOR_PITCH } from '../../utils/strings';
import Grid from '@mui/material/Grid';
import React from 'react';

function ElevatorPitch() {    
    return (
    <Grid container direction='row' alignItems='flex-start' paddingTop='10px' paddingBottom='10px'>
        <Grid item xs={12} sm={4} paddingBottom='10px'>
            <img 
                src="/images/profile.jpg" 
                alt='Danielle Zevitz'
                style={{
                    border: '5px solid',
                    borderRadius: '20px',
                    width: '90%',
                    borderColor: '#000000', // TODO: SET TO THEME COLOR
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.25)'
                }}
            />
        </Grid>
        <Grid item xs={12} sm={8} paddingRight='10px' paddingLeft='10px'>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <BoxStyle
                        data-testid="header"
                        text="Danielle Zevitz"
                        textVariant="h1"
                    />
                </Grid>
                <Grid item>
                    <BoxStyle text={ELEVATOR_PITCH}/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default ElevatorPitch