import React from "react";
import styled from "styled-components";

const Text = (props) => {
    const {
        bold,
        color,
        size,
        align,
        children
    } = props;

    const styles = {
        bold: bold,
        color: color,
        size: size,
        align: align,
    };

    return (
        <P {...styles}>
            {children}
        </P>
    );
};

Text.defaultProps = {
    children: null,
    bold: false,
    color: '#000000',
    align: false,
    size: '14px',
};

const P = styled.p`
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold ? '600' : '400')};
    ${(props) => (props.align ? `text-align: ${props.align};` : '')}
`;

export default Text;