import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';

function App() {
  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="pink" />
      </Wrapper>
      <Counter />
      <p></p>
      <InputSample />
    </div>
  );
}

export default App;
