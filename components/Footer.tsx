import * as React from 'react';
import { styled, makeStyles } from '@mui/material/styles';
import {
    Box,
    Container
} from '@mui/material';

import Copyright from '@components/Copyright';
import getConfig from 'next/config';


const { publicRuntimeConfig } = getConfig();

const FooterPanel = styled(Box)({
    borderTop: '1px solid #EEE',
    backgroundColor: '#F6F6F6',
    width: '100%',
    padding: '0.5em'
});

const Footer = ({ version, gitCommitHash }) => {
    return (
        <FooterPanel component="footer">
            <Container>
                <Copyright />
                <small >Version: {version}+{gitCommitHash}</small>
            </Container>   
        </FooterPanel>
    );
}

export default Footer;