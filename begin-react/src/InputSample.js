import React, {useState} from 'react';

function InputSample() {
const [text, setText] = useState('');
const onChange = (e) => {
    setText(e.target.value);
}
const onReset = () => {
    setText('');
}
    return (
        <div>
            {/* value값이 없으면 초기화할 때 input 박스에 있는 값은 초기화되지 않음 */}
            <input onChange={onChange} value={text}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {text}
            </div>
        </div>

    )
}

export default InputSample;