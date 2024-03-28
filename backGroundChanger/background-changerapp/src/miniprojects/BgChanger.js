import React from 'react'
import { useEffect, useState } from 'react'
import '../App.css';

const BgChanger = () => {
    const [color, setColor] = useState('white')


    useEffect(() => {
        document.body.style.backgroundColor = color;
    }, [color]);

    function clickHandler(colors) {

        setColor(colors)
    }


    return (
        <div>

            <h1>Background Changer</h1>

            <button onClick={() => clickHandler('red')} className='buttons1'>Red</button>
            <button onClick={() => clickHandler('green')} className='buttons2'>Green</button>
            <button onClick={() => clickHandler('blue')} className='buttons3'>Blue</button>
            <button onClick={() => clickHandler('black')} className='buttons4'>Black</button>
            <button onClick={() => clickHandler('pink')} className='buttons5'>Pink</button>
            <button onClick={() => clickHandler('yellow')} className='buttons6'>Gray</button>



        </div>
    )
}

export default BgChanger
