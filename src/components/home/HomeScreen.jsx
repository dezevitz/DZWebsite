import { useTheme } from '@mui/material/styles';

function HomeScreen() {
    const theme = useTheme();
    
    return (
        <>
            {/* TODO: USE CUSTOM COMPONENTS SO YOU DONT HAVE TO USE "useTheme" */}
            <h1 style={{ color: theme.colors.primary}}>HELLO</h1>
        </>
    )
}

export default HomeScreen;