import React from 'react';
import Character from './components/Character';
import "./App.css";
import styled from 'styled-components';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const CharacterWrapper = styled.div`
  
    display: flex;
    justify-content: center;
  
  `;


  return (

    <div className="App">
      <h1 className="Header">Characters</h1>
      
      <CharacterWrapper>
        <Character />
      </CharacterWrapper>

    </div>

  );
}

export default App;