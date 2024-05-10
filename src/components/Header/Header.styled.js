import {AppBar, styled, Toolbar} from '@mui/material';

// export const StyledAppBar = styled(AppBar)({
//     backgroundColor: '#334455', // Example: A dark blue color
//     // Add more styles as needed
// });

export const StyledAppBar = styled(AppBar)(({theme}) => ({
    position: 'fixed', // Change from 'static' to 'fixed'
    zIndex: theme.zIndex.drawer + 1, // Ensure it stays on top if you use drawers or modals
    backgroundColor: '#334455'
}));


export const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});
