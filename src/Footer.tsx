import React from 'react';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        backgroundColor: '#121212',
        color: '#ffffff',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
    >
      <IconButton
        component="a"
        href="https://www.linkedin.com/in/luciana-sena-frontend/"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#ffffff', margin: 1 }}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        component="a"
        href="https://github.com/coderlucianasena"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ color: '#ffffff', margin: 1 }}
      >
        <GitHubIcon />
      </IconButton>
    </Box>
  );
};

export default Footer;