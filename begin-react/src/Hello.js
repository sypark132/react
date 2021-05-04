import React from 'react';
//리액트 사용할 때 기본!

function Hello({color, name}) {
    //컴포넌트 이름은 대문자로 시작
    return <div style={{
        color:color
    }}>안녕하세요! {name}</div>
}

Hello.defaultProps = {
    name : '이름없음'
};

export default Hello;