import React from "react"
import Header from '../components/Header'

import MainWrapper from '../layouts/MainWrapper'

class Main extends React.Component {
  componentDidMount() {
    // document.body.style.backgroundColor = '#141516';
    document.body.style.margin = 0;
  }
  render() {
    return (
      <MainWrapper>
        <Header />
        <h1>Hello, World!</h1>
      </MainWrapper>
    )
  }
}

export default Main
