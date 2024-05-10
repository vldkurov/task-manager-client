import {AppBar, styled, Toolbar} from '@mui/material';


export const StyledAppBar = styled(AppBar)(({theme}) => ({
    position: 'fixed', // Change from 'static' to 'fixed'
    zIndex: theme.zIndex.drawer + 1, // Ensure it stays on top if you use drawers or modals
    backgroundColor: '#334455'
}));


export const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});
