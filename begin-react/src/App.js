import React, {useRef,useState, useMemo} from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수 세는중..');
  return users.filter(user => user.active).length;
}
function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'seoyoon',
        email: 'sy12@gmail.com',
        active: true
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@test.com',
        active: false
    },
    {
        id: 3,
        username: 'react',
        email: 'react@react.com',
        active: false
    }
  ]);



  //useRef는 변수의 값이 바뀌어도 컴포넌트가 re-rendering 되지 않는다.
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
      //username, email 대신 spread 연산자인 ...inputs를 사용해도 좋다.
    };
    //setUser([...users, user]);
    setUsers(users.concat(user));
    //concat함수는 배열 users와 배열 user를 합쳐주는 기능
    //굳이 배열이 아니어도 합쳐진다. users.concat(5) 이런식으로도 가능
    setInputs({
      username: '',
      email: ''
    });
    console.log(nextId.current); //4
    nextId.current += 1;
  };

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(users.map(
      user => user.id === id
        ? {...user, active: !user.active}
        : user
    ))
  }

  const count = useMemo(() => countActiveUsers(users), [users]);
  //useMemo는 users가 바뀔 때에만 호출이 되고 그렇지 않으면
  
  //이전에 만들어놨던 값을 재사용한다.

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
      <CreateUser 
        username={username} 
        email={email} 
        onChange={onChange} 
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </div>
  );
}

export default App;
