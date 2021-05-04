import React from 'react';
//리액트 사용할 때 기본!

function Hello({color, name, isSpecial}) {
    //컴포넌트 이름은 대문자로 시작
    return <div style={{
        color:color
    }}>
       {/* 삼항연산자 사용 {isSpecial ? <b>Hi</b> : null } */}
       {/* and연산자 사용 -> 값이 true면 오른쪽 값을 보여주고 false일 경우 아무것도 보여지지 않음 */}
       {isSpecial && <b>***</b>}
        안녕하세요! {name}
    </div>
}

Hello.defaultProps = {
    name : '이름없음'
};

export default Hello;