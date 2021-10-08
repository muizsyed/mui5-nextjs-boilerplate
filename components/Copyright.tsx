import React from 'react';
import { Typography } from '@mui/material';
import MuiLink from '@mui/material/Link';

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      {`© ${new Date().getFullYear()} `}
      <MuiLink href="/">
      </MuiLink>
      
    </Typography>
  );
}