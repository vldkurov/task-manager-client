import React from 'react';
import {useSelector} from 'react-redux';
import {Box, Button, Typography} from '@mui/material';
import {Link as RouterLink} from 'react-router-dom';


const HomePage = () => {
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);


    return (
        <Box sx={{flexGrow: 1, textAlign: 'center', padding: 3, bgcolor: 'background.default'}}>
            <Typography variant="h4" gutterBottom>Welcome to Task Manager</Typography>
            {isAuthenticated ? (
                <Typography variant="h6">Hello,
                    {user.username}
                    ! Ready to manage your tasks?</Typography>
            ) : (
                <Box>
                    <Typography variant="subtitle1" gutterBottom>Manage your tasks efficiently and
                        effectively.</Typography>
                    <Button variant="contained" color="primary" component={RouterLink} to="/login" sx={{margin: 1}}>
                        Login
                    </Button>
                    <Button variant="outlined" color="primary" component={RouterLink} to="/signup">
                        Sign Up
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default HomePage;
