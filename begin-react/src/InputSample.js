import React, {useState, useRef} from 'react';

function InputSample() {
const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
});
const nameInput = useRef();
const {name, nickname} = inputs;

const onChange = (e) => {
    const {name, value} = e.target;
    {/* react에서 객체를 업데이트 할 때에는 객체를 일단 복사한다.
     */}
    const nextInputs = {
        ...inputs,
        [name]: value,
    };
    setInputs(nextInputs)
}
const onReset = () => {
    setInputs({
        name: '',
        nickname: '',
    });
    nameInput.current.focus();
}
    return (
        <div>
            {/* value값이 없으면 초기화할 때 input 박스에 있는 값은 초기화되지 않음 */}
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname} 
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name} ({nickname})
            </div>
        </div>

    )
}

export default InputSample;