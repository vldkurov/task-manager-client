import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#334455', // Primary color used in your app
        },
        secondary: {
            main: '#556677', // Secondary color
        },
        // Add other colors or customize as needed
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6: {
            fontWeight: 500,
        },
        // Define other typography rules as needed
    },
    // You can also customize breakpoints, transitions, etc.
});

export default theme;
