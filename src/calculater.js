import { useState } from 'react'
import './calculater.css'
import { evaluate } from 'mathjs'

function Calculater(){

    let[num , setNum]=useState('')
    let[dot , setDot]=useState('false')

    let operators=['+' , '-' , '*' , '/']

    let checkinput = (text) =>{
        if(text=== '÷') return '/'
        if(text=== '×') return '*'
        return text
    }
    let clickHandler = (event) =>{
        let input=checkinput(event.target.innerText)
        if(input === '.'){
            if( dot===true ) return
            else setDot(true)
        }
        if(operators.includes(input)){
            setDot(false)
        }
        setNum(num + input)
    }
    let clearbtn = () =>{
        setNum('')
        setDot(false)
    }
    let clearonebtn= () =>{
        if(num.endsWith('.'))
        setDot(false)
        setNum(num.slice(0 , -1))
    }
    let equalbtn = () =>{
        setNum(String(evaluate(num)))
        setDot(false)
    }
    return(
        <div className="container">
            <div className="screen">{num}</div>
            <div className="buttons">
                <button onClick={clearbtn} className='color twocol'>Clear</button>
                <button onClick={clearonebtn} className='color'>C</button>
                <button onClick={clickHandler} className='color'>÷</button>
                <button onClick={clickHandler}>7</button>
                <button onClick={clickHandler}>8</button>
                <button onClick={clickHandler}>9</button>
                <button onClick={clickHandler} className='color'>×</button>
                <button onClick={clickHandler}>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler}>6</button>
                <button onClick={clickHandler} className='color'>-</button>
                <button onClick={clickHandler}>1</button>
                <button onClick={clickHandler}>2</button>
                <button onClick={clickHandler}>3</button>
                <button onClick={clickHandler} className='color'>+</button>
                <button onClick={clickHandler}>0</button>
                <button onClick={clickHandler} className='color'>.</button>
                <button onClick={equalbtn} className='color twocol'>=</button>

            </div>
        </div>
        

    )
}
export default Calculater