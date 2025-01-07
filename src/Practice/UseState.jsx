import React, { useState } from 'react'


const UseState = (props) => {
    const [count, setCount] = useState(2); 

  return (
    <div>
        <h1>usestate</h1>
         <p>clicked are {count}</p>
 <button onClick={()=>{setCount(count +2)}}>click here</button>
 <button onClick={()=>{setCount(0)}}>reset</button>
    </div>
  )
}

export default UseState