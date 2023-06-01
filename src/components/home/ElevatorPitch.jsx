import { Grid, Avatar } from '@mui/material';
import BoxStyle from '../reusable/BoxStyle';
import { ELEVATOR_PITCH } from '../../utils/strings';

function ElevatorPitch() {    
    return (
    <Grid 
        container
        height='100vh'
        direction='row'
        justifyContent='center'
        alignItems='flex-start'
        spacing={5}
    >
        <Grid item xs={12} sm={4}>
            <Avatar
                src="/images/profile.jpg" 
                alt='Picture of Danielle'
                sx={{
                    border: '5px solid',
                    borderRadius: '20px',
                    borderColor: '#000000', // SET TO THEME COLOR
                    width: '100%',
                    height: 'auto',
                    margin: '10px',
                    boxShadow: '10px 10px 10px rgba(0,0,0,0.25)'
                }}
            />
        </Grid>
        <Grid item xs={12} sm={8}>
            <Grid 
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid 
                    item
                    marginTop ='20px'
                    marginBottom= '10px'
                    marginRight='20px'
                >
                    <BoxStyle
                        text="Danielle Zevitz"
                        textVariant="h1"
                    />
                </Grid>
                <Grid 
                    item
                    marginRight='20px'
                >
                    <BoxStyle text={ELEVATOR_PITCH}/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    )
}

export default ElevatorPitch