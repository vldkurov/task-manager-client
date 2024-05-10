// HomePage.styled.js
import {Box} from '@mui/material';
import {styled} from '@mui/system';

export const StyledHomePage = styled(Box)(({theme}) => ({
    flexGrow: 1,
    textAlign: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}));

export const StyledWelcomeBox = styled(Box)(({theme}) => ({
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: theme.spacing(2)
}));
