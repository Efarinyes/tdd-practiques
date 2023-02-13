/* eslint-disable no-multiple-empty-lines */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/jsx-equals-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable eol-last */
/* eslint-disable indent */
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, it, expect } from 'vitest'
import { Calculadora, numbers, operacions, simbolIgual } from '../src/Calculadora'


describe('Calculadora', () => {
    afterEach(cleanup)
    it('ha de renderitzar', () => {
        render(<Calculadora />)
    })

    it(' ha de renderitzar el títol correctament', () => {
        render(<Calculadora />)
        screen.getByText('Calculadora')
    })
    it(' ha de renderitzar els números de la calculadora', () => {
        render(<Calculadora />)

        numbers.forEach(number => {
            screen.getByText(number)
        })
    })
    it(' ha de renderitzar 4 columnes', () => {
        render(<Calculadora />)
        const columnes = screen.getAllByRole('row')
        expect(columnes).toHaveLength(4)
    })
    it('ha de renderitzar les operacions', () => {
        render(<Calculadora />)
        operacions.forEach(operacio => {
            screen.getByText(operacio)
        })
    })
    it('ha de mostrar el signe "igual"', () => {
        render(<Calculadora />)
        screen.getByText('=')
    })
    it('ha de mostrar un input', () => {
        render(<Calculadora />)
        screen.getByRole('textbox')
    })
    it('ha de mostrar el número que es prem', () => {
        render(<Calculadora />)
        const one = screen.getByText('1')
        fireEvent.click(one)
        const input = screen.getByRole('textbox')
        expect(input.value).toBe('1')
    })
    it('ha de mostrar els diferents números que es premen', () => {
        render(<Calculadora />)

        const one = screen.getByText('1')
        fireEvent.click(one)

        const dos = screen.getByText('2')
        fireEvent.click(dos)

        const tres = screen.getByText('3')
        fireEvent.click(tres)

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('123')
    })
    it('ha de mostrar els inputs usuari després de clicar números i operacions', () => {
        render(<Calculadora />)
        const one = screen.getByText('1')
        fireEvent.click(one)

        const suma = screen.getByText('+')
        fireEvent.click(suma)
        fireEvent.click(one)
        const input = screen.getByRole('textbox')
        expect(input.value).toBe('1+1')
    })
    it('ha de mostrar el resultat de les operacions introduides per user', () => {
        render(<Calculadora />)

        const one = screen.getByText('1')
        fireEvent.click(one)
        const suma = screen.getByText('+')
        fireEvent.click(suma)
        fireEvent.click(one)
        const igual = screen.getByText(simbolIgual)
        fireEvent.click(igual)

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('2')
    })
})