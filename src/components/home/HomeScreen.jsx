import { alignProperty } from '@mui/material/styles/cssUtils';
import theme from '../../utils/theme';
import ElevatorPitch from './ElevatorPitch';

function HomeScreen() {    
    return (
        <div
            style={{ 
                width: '100%',
                height: '100vh',
                backgroundColor: theme.colors.primaryDark,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <ElevatorPitch/>
        </div>
    )
}

export default HomeScreen;
