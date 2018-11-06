import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import SplitText from 'react-pose-text';

import B from './atoms/B';

const charPoses = {
  exit: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    delay: ({charIndex}) => charIndex * 5
  }
}

const HeroWrapper = styled.div`
  width: 100%;
  margin-bottom: 25px;
`

export default () => (
  <StaticQuery
    query={graphql`
      query HeroDescriptionQuery {
        site {
          siteMetadata {
            description
          }
        }
      }
    `}
    render={data => (
      <HeroWrapper initialPose="exit" pose="enter">
          <h2>I'm Myles, a <B>UI Engineer</B>.</h2>
          <p>{data.site.siteMetadata.description}</p>
      </HeroWrapper>
    )}
  />
)
