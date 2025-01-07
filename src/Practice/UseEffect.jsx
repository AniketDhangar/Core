import React, { useEffect, useState } from 'react'

function UseEffect() {
    // const [count, setCount] = useState(0);
    // const [total, setTotal] = useState(1);
    const [seconds,setSeconds] = useState(1);


    // function handleClick() {
    //     setCount(count + 1);
    // }

    // function handleTotal() {
    //     setTotal(total + 1);
    // }


    //variation -1 : runs on every render
    // useEffect(() => {
    //     alert("button clicked"); 
    // })


    //variation- 2 : runs on first render only and when dependency list is empty
    // useEffect(() => {
    //     alert("on first render"); 
    // },[])


    //variation- 3  :runs every time when count value is updated
    // useEffect(() => {
    //     alert("evrery time when count updates"); 
    // },[count]);

//variation- 4 : runs when count or total updates
    // useEffect(() => {
    //     alert("any one is updated"); 
    // },[count,total]);


//    variation- 5: with cleanup code , clean up code runs first 
// useEffect(() => {
//   alert("runs after clean up,now ui is update")

//   return () => {
//     alert(" new value added soon...clean up running")
// }
// }, [count])



//example-1 
useEffect(() => {
    let intervalID =setInterval(()=>{
        console.log("started")
setSeconds(prev => prev+1)
    },1000)
  return () => {
    console.log("it is stopped when component is having unmounted")
    clearInterval(intervalID)
  }
}, [])








    return (
        <div>
            {/* <h2>count is:{count}</h2>
            <button onClick={handleClick}>click me</button>

            <h2>total is:{total}</h2>
            <button onClick={handleTotal}>click me</button> */}


            <div>
                <h2>seconds:{seconds}</h2>
            </div>
        </div>
    )
}

export default UseEffect