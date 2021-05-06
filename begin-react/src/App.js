import React, {useRef} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const users = [
    {
        id: 1,
        username: 'seoyoon',
        email: 'sy12@gmail.com'
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@test.com'
    },
    {
        id: 3,
        username: 'react',
        email: 'react@react.com'
    }
  ];  

  //useRef는 변수의 값이 바뀌어도 컴포넌트가 re-rendering 되지 않는다.
  const nextId = useRef(4);

  const onCreate = () => {
    console.log(nextId.current); //4
    nextId.current += 1;
  }

  return (
    <div>
      <Wrapper>
        <Hello name="react" color="red" isSpecial={true}/>
        <Hello color="pink" />
      </Wrapper>
      <Counter />
      <p></p>
      <InputSample />
      <p></p>
      <UserList users={users} />
    </div>
  );
}

export default App;
