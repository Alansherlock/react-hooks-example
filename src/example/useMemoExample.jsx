import React, { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [count, setCounter] = useState(0);
  // 参数一return一个缓存的值，参数二为依赖XXX变化
  const memorizedText = useMemo(() => {
    // 缓存进入组件的时间
    console.log("run useMemo function");
    return `this is a memorized text ${Date.now()}`;
  }, []);
  return <div>
    {memorizedText}
    <p>You clicked {count} times</p>
    <button onClick={()=> {setCounter(count + 1)}}>Click Me</button>
  </div>
}

export default UseMemoExample;
