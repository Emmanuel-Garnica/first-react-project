import styled, { css } from "styled-components";

export const PrimaryButtonStyle = css`
    display: block;
    padding: 1rem 1.2rem;
    border-radius: 12px;
    font-weight: bold;
    font-size: 1.2em;
    text-transform: uppercase;  
    background-color: navy;
    color: white;
    cursor: pointer;
`;

export const SecondaryButtonStyle = css`
    display: inline-block;
    padding: 1rem 1.2rem;
    border-radius: 12px;
    font-weight: bold;
    font-size: 1.2em;
    text-transform: uppercase; 
    text-decoration: underline; 
    text-decoration-thickness: 3px;
    background: transparent;
    color: inherit;
    cursor: pointer;
`;

export const LinkPrimaryButton = styled.a`
    ${PrimaryButtonStyle}
`;
export const PrimaryButton = styled.button`
    ${PrimaryButtonStyle}
`;

export const LinkSecondaryButton = styled.a`
    ${SecondaryButtonStyle}
`;
export const SecondaryButton = styled.button`
    ${SecondaryButtonStyle}
`;