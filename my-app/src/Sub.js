import React from 'react';

// 자식 컴포넌트를 모두 그리지 않아도 되도록 함수를 제공!!
let Sub_num = 10;

const Sub = () => {
    return (
        <div>
            <h1>Sub입니다.</h1>
        </div>
    );
};

export { Sub_num };
export default Sub;