import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { ButtonWithCM } from './Button2';
import './App.css';


const AppContainer = styled.div`
  .Header {
    font-size: 40px;
  }
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <div>
          <Button primary>Success Button</Button>
          <Button info>Info Button</Button>
          <Button warning>Warning Button</Button>
          <Button danger>Danger Button</Button>
        </div>
        <div>
          <ButtonWithCM>
            Button With CM
          </ButtonWithCM>
        </div>
      </AppContainer>
    );
  }
}

export default App;
