import React, { useState } from 'react'

export default function Counter() {
const [count,setCount] = useState(0)
const increaseval=()=> setCount(count + 1)
const decreaseval=()=> setCount(count - 1)


  return (
    <>
    <div className="container text-center">
    <h1 className="">{count}</h1>
    <div>
        <button className="btn btn-dark mx-2" onClick={increaseval}>+</button>
        {count}
        <button className="btn btn-dark mx-2" onClick={decreaseval}>-</button>
    </div>
    </div>
    </>
  )
}
