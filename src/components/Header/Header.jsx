import React from 'react';
import {Button, Typography} from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../../features/auth/authOperations'; // Ensure this is imported correctly
import {StyledAppBar, StyledToolbar} from './Header.styled';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(logoutUser());
    };

    return (
        <StyledAppBar position="static">
            <StyledToolbar>
                <Typography variant="h6" component="div" sx={{flexGrow: 1}} onClick={() => {
                    navigate('/')
                }}>
                    <span style={{cursor: 'pointer'}}>Task Manager</span>
                </Typography>
                {!isAuthenticated ? (
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

