import React from 'react';
import {Box, IconButton, Typography} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px',
            bgcolor: 'primary.dark',
            color: 'common.white'
        }}>
            <Typography variant="body2">
                © 2024 Kuroff Web Solutions
            </Typography>
            <Box>
                <IconButton color="inherit" component="a" href="https://linkedin.com" target="_blank"
                            aria-label="LinkedIn">
                    <LinkedInIcon/>
                </IconButton>
                <IconButton color="inherit" component="a" href="https://github.com" target="_blank" aria-label="GitHub">
                    <GitHubIcon/>
                </IconButton>
                <IconButton color="inherit" component="a" href="https://twitter.com" target="_blank"
                            aria-label="Twitter">
                    <TwitterIcon/>
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
