import React , {useState} from 'react';

function Counter() {
    //useState를 사용해서 바뀌는 값을 관리할 수 있다.
    //number라는 상태값을 만들건데 이 상태의 기본값은 0이다.
    //이 상태를 바꾸는 함수가 setNumber이다.
    const [number, setNumber] = useState(0);

    const onIncrease = () => {
        //업데이트 되기 전 상태를 prevNumber로 두고 함수형으로 쓸 수 있음
        //지금은 차이 없지만 나중에 성능 최적화할 때 필요
        setNumber(prevNumber => prevNumber + 1)
        console.log('+1');
    }
    const onDecrease = () => {
        setNumber(number - 1)
        console.log('-1');
    }

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}

export default Counter;