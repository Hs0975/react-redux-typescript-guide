import React from 'react'
import { useEffect, useState } from 'react'
import '../App.css';

const BgChanger2 = () => {
    const [color, setColor] = useState('')

    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color])

    function changeHanlder(e) {
        setColor(e.target.value)
    }

    return (

        <div className="App" >
            <h1>Background Changer</h1>
            <input className='inputbox' type='text' value={color} onChange={changeHanlder} placeholder='Enter your color' />

        </div>
    )
}

export default BgChanger2
