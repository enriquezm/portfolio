import React from 'react'
import Header from '../components/Header'

import MainWrapper from '../layouts/MainWrapper'
import Hero from '../components/Hero'

class Main extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#0C0D1B';
    document.body.style.margin = 0;
  }
  render() {
    return (
      <MainWrapper>
        <Header />
        <Hero />
      </MainWrapper>
    )
  }
}

export default Main
