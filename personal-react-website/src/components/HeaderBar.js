import React from "react";
import { ButtonGroup } from '@material-ui/core';
import { Grid, Text, StyleButton, StyledLink } from '../elements/index'

const HeaderBar = (props) => {
    return(
        <React.Fragment>
            <Grid height='50px' position='absolute' bottom='0px'>
                <ButtonGroup>
                    <StyledLink to='/' ><StyleButton><Text color='white'>Main Page</Text></StyleButton></StyledLink>
                    <StyledLink to='/aboutme' ><StyleButton><Text color='white'>About me</Text></StyleButton></StyledLink>
                    <StyleButton>Hobby</StyleButton>
                </ButtonGroup>
            </Grid>
        </React.Fragment>
    );
}

const buttonStyle = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
}

export default HeaderBar;