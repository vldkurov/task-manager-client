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
            main: '#ff1744',
        },
        priorityMedium: {
            main: '#ffa726',
        },
        priorityLow: {
            main: '#4caf50',
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
