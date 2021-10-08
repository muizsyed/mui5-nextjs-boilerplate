import * as React from 'react';
import { styled, makeStyles } from '@mui/material/styles';
import {
    Box,
    Container
} from '@mui/material';

import Copyright from '@components/Copyright';

const FooterPanel = styled(Box)({
    borderTop: '1px solid #EEE',
    backgroundColor: '#F6F6F6',
    width: '100%',
    padding: '0.5em'
});

const Footer = () => {
    
    return (
        <FooterPanel component="footer">
            <Container>
                <Copyright />
            </Container>   
        </FooterPanel>
    );
}

export default Footer;