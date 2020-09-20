import React, { useState, useEffect } from 'react';
const log = (count) => {
        console.log(count)
}
// 定时器的副作用
// const useInterval = (callback,time) => {
//     useEffect(()=>{
//         setInterval(callback,time)
//         return () => {
//             clearInterval();
//         }
//     },[callback,time])
// }
export default () => {
    const [count, setCount] = useState(0);
    // 依赖count变化的作用
    useEffect(log.bind(null,count),[count])
    // useInterval(()=> {
    //     setCount(count => count+1);
    // },1000)
    return <div>
        Your count: {count}
        <button onClick={() => {
            setCount(1 + count)
        }}>Add</button>
    </div>
}