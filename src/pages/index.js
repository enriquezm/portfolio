import React from "react"
import Header from '../components/Header'

class Main extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = '#141516';
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Hello, World!</h1>
      </div>
    )
  }
}

export default Main
