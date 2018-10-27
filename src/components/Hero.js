import React from 'react';
import styled from 'styled-components';

import BigHeading from './atoms/BigHeading';
import P from './atoms/P';
import B from './atoms/B';
import SocialLinks from './molecules/SocialLinks';

const HeroWrapper = styled.div`
  color: white;
  display: flex;
  height: 100vh;
`
const FlexColumn = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100vw;
    border: 1px solid red;
  }
`

const Hero = () => {
  return (
    <HeroWrapper>
      <FlexColumn>
        <BigHeading>Hello there! I'm Myles and I'm a <B>Frontend Developer</B>.</BigHeading>
        <P>Using emotional design and empathy, I want to create human-like interactions between the user and interface.</P>
        <SocialLinks />
      </FlexColumn>
      <FlexColumn>

      </FlexColumn>
    </HeroWrapper>
  )
}

export default Hero
