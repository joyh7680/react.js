import React, { useState } from 'react';

const Say = () => {
    // 배열의 첫번째 원소는 현재상태, 두번째 원소는 상태를 바꿔주는 함수
    // [text, setText]
    const [message, setMessage] = useState(''); // 초깃값
    const onClickEnter = () => setMessage('Hello~');
    const onClickLeave = () => setMessage('~bye bye');

    const [color, setColor] = useState('black');

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            {/* <h1 style = 'black'</h1> */}
            {/* 첫번째 준가로 : 객체 */}
            {/* jsx의 문법을 받는다 */}

            <button style={{ color: 'red' }} onClick={() => setColor('red')}>
                {/* <button style='color:red'></button> */}
                red
            </button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>
                green
            </button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
                blue
            </button>
        </div>
    );
};

export default Say;