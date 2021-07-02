import React from "react";
import styled from "styled-components"

const Grid = (props) => {
    const { 
        position,
        flex,
        flex_direction,
        width,
        height,
        margin,
        marginTop,
        padding,
        bottom,
        align,
        bg,
        transform,
        children
    } = props;

    const styles = {
        position: position,
        flex: flex,
        flex_direction: flex_direction,
        width: width,
        height: height,
        margin: margin,
        marginTop: marginTop,
        padding: padding,
        bottom: bottom,
        align: align,
        transform: transform,
        bg: bg,
    };

    return(
        <GridBox {...styles}>{children}</GridBox>
    );
};

Grid.defaultProps = {
    position: 'static',
    children: null,
    flex: false,
    flex_direction: false,
    width: '100%',
    height: '100%',
    padding: false,
    margin: false,
    marginTop: false,
    bottom: false,
    align: false,
    bg: false,
    transform: false,
};

const GridBox = styled.div`
    position: ${(props) => props.position};
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    ${(props) => (props.marginTop ? `margin-top: ${props.marginTop};` : '')}
    ${(props) => (props.bottom ? `bottom: ${props.bottom};` : '')}
    ${(props) => (props.padding ? `padding: ${props.padding};` : '')}
    ${(props) => (props.margin ? `margin: ${props.margin};` : '')}
    ${(props) => (props.bg ? `background-color: ${props.bg};` : '')}
    ${(props) => (props.align ? `align-items ${props.align};` : '')}
    ${(props) => (props.flex ? `display: flex; flex: ${props.flex};` : '')}
    ${(props) => (props.flex_direction ? `flex-direction: ${props.flex_direction};` : '')}
    ${(props) => (props.transform ? `transform: ${props.transform};` : '')}
`;

export default Grid;