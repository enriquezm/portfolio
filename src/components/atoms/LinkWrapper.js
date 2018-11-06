import React from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const Box = posed.div({
  hoverable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.5
  }
})

const LinkWrapper = styled(Box)`
  cursor: pointer;
  display: flex;
  margin-right: 10px;
  a {
    color: #4163ed;
    &:hover {
      color: #d82186;
    }
  }
`

const ExternalLink = (props) => {
  return (
    <LinkWrapper>
      <a href={props.path}>
        {props.children}
      </a>
    </LinkWrapper>
  );
}

export default ExternalLink;
