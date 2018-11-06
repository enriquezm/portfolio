import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const AMotion = posed.a({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  }
})

const AWrapper = styled(AMotion)`
  margin-right: 15px;
  text-decoration: none;
  color: red;
  background-color: red;
  height: 10px;
  width: 10px;
  &:link {
    color: #4163ED;
  }
  &:hover {
    color: #d82186;
  }
`

const AExternal = ({children}) => {
  return (
    <AWrapper>
      {children}
    </AWrapper>
  )
}

export default AExternal;
