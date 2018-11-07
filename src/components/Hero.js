import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import B from './atoms/B';

const HeroWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
`
const HeroHeading = styled.h2`
  font-size: 36px;
  font-weight: 700;
`

const CTA = styled(Link)`
  margin-right: 10px;
  border: 2px solid #40E687;
  padding: 5px 8px;
  color: white;
  text-decoration: none;
  transition: all 0.3s;
  &:hover {
    background: #40e687;
    text-shadow: 1px 1px 4px #000;
    transition: all 0.3s;
  }
`

export default () => {
  return (
    <HeroWrapper>
        <HeroHeading>YUP, I'M ANOTHER <B>UI ENGINEER</B>.</HeroHeading>
        <p>But not just any UI Engineer! I'm bringing life to the web by creating organic user interfaces. Or trying to at least.</p>
        <CTA to={"/resume/"}>Resume</CTA>
        <CTA to={"/"}>Check out my experiments</CTA>
    </HeroWrapper>
  )
}
