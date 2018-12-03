import React from 'react';
import styled from 'styled-components';

const StatusContainer = styled.div`
  p {
    font-size: 0.8em;
    b {
      color: #2aff82;
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
                <p><b>Status:</b> { this.state.status[statusNum] }</p>
            </StatusContainer>
        );
    }
}

export default Status;