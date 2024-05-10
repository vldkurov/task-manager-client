import React from 'react';
import {useSelector} from 'react-redux';
import {Button, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';
import {StyledHomePage, StyledWelcomeBox} from './HomePage.styled';

const HomePage = () => {
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <StyledHomePage>
            <Typography variant="h4" gutterBottom>Welcome to Task Manager</Typography>
            {isAuthenticated ? (
                <StyledWelcomeBox>
                    <Typography variant="h6">Hello, {user.username}! Ready to manage your tasks?</Typography>
                    <Button variant="contained" color="primary" component={RouterLink} to="/tasks" sx={{marginTop: 2}}>
                        Go to My Tasks
                    </Button>
                </StyledWelcomeBox>
            ) : (
                <StyledWelcomeBox>
                    <Typography variant="subtitle1" gutterBottom>Manage your tasks efficiently and
                        effectively.</Typography>
                    <Button variant="contained" color="primary" component={RouterLink} to="/login" sx={{margin: 1}}>
                        Login
                    </Button>
                    <Button variant="outlined" color="primary" component={RouterLink} to="/signup">
                        Sign Up
                    </Button>
                </StyledWelcomeBox>
            )}
        </StyledHomePage>
    );
};

export default HomePage;
