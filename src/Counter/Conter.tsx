import React, { useState} from 'react';
import classes from './Counter.module.scss';

export default function Counter() {

    const [count, setCount] = useState(0);
    const countHandler = () =>{
        setCount(count+1)
    }



    return (
        <div>
             <h1>{count}</h1>
             <button className={classes.open} onClick = {countHandler}></button>
        </div>
    
    )

}