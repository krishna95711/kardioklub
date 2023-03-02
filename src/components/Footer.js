import React from 'react';
import { Box, Typography } from '@mui/material';
// import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <div>
    <Box mt="100px">
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: '28px', xs: '20px' } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        Made by kishan daaby
      </Typography>
    </Box>
  </div>
);

export default Footer;
