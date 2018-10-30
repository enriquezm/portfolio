import React from 'react';
import Header from '../components/Header';

import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Hero from '../components/Hero';

export default ({ data }) => (
  <Layout>
    <Header title={data.site.siteMetadata.title} />
    <Hero />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
