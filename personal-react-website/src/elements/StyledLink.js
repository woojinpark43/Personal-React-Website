import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = (props) => {
    return (
        <LinkStyled {...props}/>
    );
}

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export default StyledLink;