import React, {useEffect} from 'react';

function User({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     // props -> state
    //     // Rest API
    //     // D3 Video.js
    //     // setInterval, setTimeout
    //     return () => {
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //         console.log('컴포넌트가 화면에서 사라짐')
    //     }
    // },[]);
    useEffect(() => {
        //컴포넌트가 렌더링되자마자 실행
        console.log('user값이 설정됨')
        console.log(user);
        return () => {
            //clean함수(뒷처리함수), [user]가 업데이트 되기 직전에 실행
            console.log('user값이 바뀌기 전');
            console.log(user);
        }
        //props를 가져왔다면 무조건 넣어주어야 한다.
    }, [user]);

    return (
        <div>
            <b style={{
                color: active ? 'green':'black',
                cursor: 'pointer'
                }}
                onClick={() => onToggle(id)}
            >
                {username}
            </b> 
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}
{/* 배열을 렌더링할 때는 key값을 주어야 제대로 렌더링이 된다.
고유 키값이 없을 경우 인덱스로 줘도 괜찮지만 효율적이지는 않음.
데이터가 적고 변경될 확률이 적은 경우 인덱스 써도 오케이,
데이터가 많고 자주 바뀌는 경우에는 고유 키값을 만들어서 렌더링 한다. */}

function UserList({users, onRemove, onToggle}) {
    return (
        <div>
            {
                users.map(
                    user => (
                        <User 
                            user={user} 
                            key={user.id} 
                            onRemove={onRemove}
                            onToggle={onToggle}
                        />)
                )
            }
        </div>
    )
}

export default UserList;