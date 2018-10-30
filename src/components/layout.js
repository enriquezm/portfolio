import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  padding: 0 10%;
`


export default ({ children }) => (
  <Wrapper>
    { children }
  </Wrapper>
)
