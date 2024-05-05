// import React from 'react';
// import {Button, Typography} from '@mui/material';
// import {Link as RouterLink} from 'react-router-dom';
// import {useSelector} from 'react-redux';
// import {StyledAppBar, StyledToolbar} from './Header.styled';
//
// const Header = () => {
//     const user = useSelector(state => state.auth.user);
//
//     return (
//         <StyledAppBar position="static">
//             <StyledToolbar>
//                 <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
//                     Task Manager
//                 </Typography>
//                 {!user ? (
//                     <>
//                         <Button color="inherit" component={RouterLink} to="/login">Login</Button>
//                         <Button color="inherit" component={RouterLink} to="/signup">Signup</Button>
//                     </>
//                 ) : (
//                     <>
//                         <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
//                             Welcome, {user.username}
//                         </Typography>
//                         <Button color="inherit" component={RouterLink} to="/logout">Logout</Button>
//                     </>
//                 )}
//             </StyledToolbar>
//         </StyledAppBar>
//     );
// };
//
// export default Header;

// src/components/Header/Header.jsx
import React from 'react';
import {Button, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../features/auth/authOperations'; // Ensure this is imported correctly
import {StyledAppBar, StyledToolbar} from './Header.styled';

const Header = () => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                    Task Manager
                </Typography>
                {!user ? (
                    <>
                        <Button color="inherit" component={RouterLink} to="/login">Login</Button>
                        <Button color="inherit" component={RouterLink} to="/signup">Signup</Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            Welcome, {user.username}
                        </Typography>
                        <Button color="inherit" onClick={handleLogout}>Logout</Button>
                    </>
                )}
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;

