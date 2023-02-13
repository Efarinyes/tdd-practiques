/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable eol-last */
/* eslint-disable indent */

import { useState } from 'react'
import { evaluate } from 'mathjs'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const rows = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0]
]
export const operacions = ['+', '-', '*', '/']
export const simbolIgual = '='

export const Calculadora = () => {
    const [value, setValue] = useState('')
    // function creteHandleNumber (number) {
    //     return () => setValue(value.concat(number))
    // }
    const creteHandleClick = op => () => setValue(value.concat(op))

    return (
        <section>
            <h1>Calculadora</h1>
            <input value = {value} readOnly />
            <div role='grid'>
                {
                    rows.map((row, idx) => (
                        <div key={idx} role='row'>
                            {row.map((number) => <button onClick={ creteHandleClick(number) } key={number}> {number} </button>)}
                        </div>
                    ))
                }
                {
                    operacions.map(operacio => (
                        <button onClick={ creteHandleClick(operacio)} key={operacio}> {operacio} </button>
                    ))
                }
                <button onClick={ () => setValue(evaluate(value)) }> { simbolIgual }</button>
            </div>
        </section>
    )
}