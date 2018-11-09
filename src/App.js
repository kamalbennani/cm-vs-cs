import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
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
        <Button primary>Success Button</Button>
        <Button info>Info Button</Button>
        <Button warning>Warning Button</Button>
        <Button danger>Danger Button</Button>
      </AppContainer>
    );
  }
}

export default App;
