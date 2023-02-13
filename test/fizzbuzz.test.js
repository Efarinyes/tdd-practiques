/* eslint-disable indent */

import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'
describe('fizzbuzz', () => {
    // Aquest test es innecessari perque ja esta cobert a la funció
    // És reiteratiu
    // it('should be a function', () => {
    //     expect(typeof fizzbuzz).toBe('function')
    // })

    it('ha de fallar si no li passem un número com a parametre', () => {
        expect(() => fizzbuzz()).toThrow()
    })
    it('ha de mostrar un error específic si no rep un número', () => {
        expect(() => fizzbuzz()).toThrow('Ha petat')
    })
    it('ha de mostrar un error específic si no rep un número', () => {
        expect(() => fizzbuzz(NaN)).toThrow('Ha petat')
    })
    it('ha de retornar 1 si el numero proveït es 1', () => {
        expect(fizzbuzz(1)).toBe(1)
    })
    it('ha de retornar 2 si el numero proveït es 2', () => {
        expect(fizzbuzz(2)).toBe(2)
    })
    it('ha de retornar "fizz si el numero proveït es 3', () => {
        expect(fizzbuzz(3)).toBe('fizz')
    })
    it('ha de retornar "fizz si el numero proveït es múltiple de 3', () => {
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')
        expect(fizzbuzz(12)).toBe('fizz')
    })
    // Aquesta prova ja està coberta per la funció
    // it('ha de tornar 4 si el número proveït es 4', () => {
    //     expect(fizzbuzz(4)).toBe(4)
    // })
    it('ha de retornar "buzz" si el número proveït es multiple de 5', () => {
        expect(fizzbuzz(5)).toBe('buzz')
    })
    it('ha de retornar "buzz" si el número proveït es multiple de 5', () => {
        expect(fizzbuzz(10)).toBe('buzz')
        expect(fizzbuzz(20)).toBe('buzz')
    })
    it('ha de retornar "fizzzbuzz" si el número proveït es multiple de 3 i de 5', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz')
    })
})
