import React, { useState, useCallback, useMemo, memo} from 'react'

const s = new Set();
const Child = ({name, onClick}) => {
  console.log('子组件?')
  return (
    <>
    <div>name</div>
    <button onClick={onClick.bind(null, Math.random()+'')}>改变name</button>
      <p>我是一个子组件</p>
    </>
  );
}
const ChildMomo = memo(Child);
export default () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('liuzehao');
  const add = useCallback(() => {
    setCount(x => x + 1)
  },[]);
  s.add(add);
  console.log(s.size);
  return <>
    {count}
    <button onClick={add}>+</button>
    <ChildMomo name={
      useMemo(() => ({
        name,
      }), [name])
    }
      onClick={useCallback((newName) => setName(newName), [])}
    />
  </>
}