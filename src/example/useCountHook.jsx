import React, { useState } from 'react';

const useCount = (initialValue) => {
    const [count, setCount] = useState(initialValue);
    return [
        count,
        () => {
            setCount(count + 1);
        }
    ]
}
export default () => {
    const [count1, addCount1] = useCount(0);
    const [count2, addCount2] = useCount(0);
    return <div>
        Your count: {count1}
        Your count: {count2}
        <button onClick={() => {
            addCount1()
        }}>Add1</button>
        <button onClick={() => {
            addCount2()
        }}>Add2</button>
    </div>
}