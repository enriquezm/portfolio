import React from 'react';
import styled from 'styled-components';

import { StaticQuery, graphql } from 'gatsby';

import AInternal from './atoms/AInternal';
import SocialLinks from './molecules/SocialLinks';

const NavBar = styled.header`
  padding-top: 20px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.div`
  font-size: 1em;
`

export default () => (

  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <NavBar>
        <div>
          <Logo>
            <AInternal to="/">{data.site.siteMetadata.title}</AInternal>
          </Logo>
        </div>
        <div>
          <SocialLinks />
        </div>
      </NavBar>
    )}
  />
)
