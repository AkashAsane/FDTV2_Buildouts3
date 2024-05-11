import React, { useEffect, useState } from 'react';
import './App.css';

function Counter() {
    const[count,setCount]=useState(0)

    let increment=()=>{
        setCount(count+1);
    }  

    let decrement=()=>{
        setCount(count-1);
    }  

    return(
       <div>
           <h1>Counter App</h1>
           <div>Count: {count}</div>
           <button type='button' onClick={increment}>Increment</button>
           <button type='button' onClick={decrement}>Decrement</button>

       </div>
    )
}

export default Counter;
