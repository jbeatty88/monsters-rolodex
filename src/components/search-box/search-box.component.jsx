import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  -webkit-appearance: none;
  border: none;
  border-radius: 25px;
  outline: none;
  padding: 10px;
  width: 25%;
  line-height: 30px;
  margin-bottom:30px;
  
  &:focus{
    border: 1px solid deepskyblue;
  }
`

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <div>
            <StyledInput type={'search'}
                   placeholder={placeholder}
                   onChange={handleChange}
            />
        </div>
    );
};
