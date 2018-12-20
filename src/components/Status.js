import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInOut = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
`;
const FadeInOut = styled.b`
  animation: ${fadeInOut} 1s ease-in infinite alternate;
`;
const StatusContainer = styled.div`
  margin-bottom: 50px;
  p {
    font-size: 16px;
    b {
      color: #FF255B;
    }
  }
`;

class Status extends React.Component {
    constructor() {
        super();
        this.state = {
            status: [
                "Making some coffee.",
                "Taking pics of my cat.",
                "Getting a couple rounds of beer.",
                "Designing a new UI.",
                "Staring at some error logs."
            ]
        };
    }
    render() {
        const statusNum = Math.floor((Math.random() * this.state.status.length));

        return (
            <StatusContainer>
                <p><FadeInOut>Status:</FadeInOut> { this.state.status[statusNum] }</p>
            </StatusContainer>
        );
    }
}

export default Status;
