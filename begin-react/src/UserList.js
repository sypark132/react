import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}
{/* 배열을 렌더링할 때는 key값을 주어야 제대로 렌더링이 된다.
고유 키값이 없을 경우 인덱스로 줘도 괜찮지만 효율적이지는 않음.
데이터가 적고 변경될 확률이 적은 경우 인덱스 써도 오케이,
데이터가 많고 자주 바뀌는 경우에는 고유 키값을 만들어서 렌더링 한다. */}

function UserList() {
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

    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id}/>)
                )
            }
        </div>
    )
}

export default UserList;