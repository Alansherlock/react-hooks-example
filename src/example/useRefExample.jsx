import React, { useState,useRef } from 'react'

export default function UseRefExample() {
  // 定义
  const [state, setstate] = useState(0)
  const prev = useRef(null)
  return <div>
    <p>当前值：{state}</p>
    <p>之前的值：{prev.current}</p>
    <button onClick={()=> {
      prev.current = state;
      setstate(x => x+1)
    }}>Click me to add</button>
    <button onClick={() => {
      prev.current = state;
      setstate(x => x - 1)
    }}>Click me to remove</button>
  </div>
}