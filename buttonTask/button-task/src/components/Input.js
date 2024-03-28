import React, { useEffect, useState } from 'react'

const Input = () => {
    const [input, setInput] = useState()
    const [err, setErr] = useState('')
    const [button, setButton] = useState(false)


    function changeHandler(e) {
        let value = e.target.value

        setInput(e.target.value)
        if (value.length < 6) {
            setButton(true)
            setErr('Error!! Please Enter a value greater than 6')

        }
        else if (value.length > 6 && value.length <= 10) {
            setErr('')
            setButton(false)


        }
        else if (value.length > 10) {
            setButton(true)
            setErr('Error!! Please Enter the Number less than 10')

        }

    }

    return (
        <div>
            <input onChange={changeHandler} type='number' />
            <button disabled={button}>click</button>
            <div><h3 style={{ color: 'red' }}>{err}</h3></div>
        </div>
    )
}

export default Input
