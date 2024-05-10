import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#334455',
        },
        secondary: {
            main: '#556677',
        },
        priorityHigh: {
            main: '#ff1744',  // Example: bright red for high priority
        },
        priorityMedium: {
            main: '#ffa726', // Example: amber for medium priority
        },
        priorityLow: {
            main: '#4caf50', // Example: green for low priority
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
        h6: {
            fontWeight: 500,
        },
    },
});

export default theme;
