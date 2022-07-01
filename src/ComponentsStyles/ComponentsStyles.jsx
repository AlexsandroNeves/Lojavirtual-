

import React from 'react';
import styled from 'styled-components'

export const Button = styled.button`
    color: #fff;
    text-transform: uppercase;
    border: none;
    background: ${(props) => props.color};
    height: 50px;
    width: ${(props) => props.width};
    font-weight: bold;
    border-radius: ${(props) => props.radius};
    font-size:18px;
`;

export const Titlepage = styled.h2`
    color: #ED1A39;
    font-size: 32px;
    border-bottom: 1px solid #E2DEDC;
    font-weight: 500;
    padding-bottom: 20px;
    margin-top: 0;
`;

export const VitrineCor = styled.div`
width:48px;
height:24px;
background:${(props) => props.cor};
`;