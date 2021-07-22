import React from 'react';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  font-family: 'Bigelow Rules', serif;
  font-size: 72px;
  color: #0ccac4;

`

export const TextBanner = ({children}) => {
    return (
        <>
            <StyledH1>
                {children}
            </StyledH1>
        </>
    )
};
