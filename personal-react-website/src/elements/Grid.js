import React from "react";
import styled from "styled-components"

const Grid = (props) => {
    const { 
        flex,
        flex_direction,
        width,
        height,
        margin,
        padding,
        bg,
        children
    } = props;

    const styles = {
        flex: flex,
        flex_direction: flex_direction,
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        bg: bg,
    };

    return(
        <GridBox {...styles}>{children}</GridBox>
    );
};

Grid.defaultProps = {
    children: null,
    flex: false,
    flex_direction: false,
    width: '100%',
    height: '100%',
    padding: false,
    margin: false,
    bg: false,
};

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
    ${(props) => (props.flex ? `display: flex; flex: ${props.flex};` : '')}
    ${(props) => (props.flex_direction ? `flex-direction: ${props.flex_direction};` : '')}
`;

export default Grid;