import React from 'react';
import {Button, Typography} from '@mui/material';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {StyledAppBar, StyledToolbar} from './Header.styled';
import Logout from "../Logout/Logout";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector(state => state.auth);


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
                        <Button color="inherit" component={RouterLink} to="/tasks">My Tasks</Button>
                        <Logout/>
                    </>
                )}
            </StyledToolbar>
        </StyledAppBar>
    );
};

export default Header;

