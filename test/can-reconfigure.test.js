import { describe, expect, it } from 'vitest'
import { canReconfigure } from '../src/fabrica'

// const canReconfigure = (from, to) => {
//   // if (from === undefined) throw new Error('parametre requerit') ja no es necessari
//   if (typeof from !== 'string') throw new Error('from no es un string')
//   if (typeof to !== 'string') throw new Error('to no és un string')

//   const mateixaLongitud = from.length === to.length
//   if (!mateixaLongitud) return false

//   const mateixesLletresUniques = new Set(from).size === new Set(to).size
//   if (!mateixesLletresUniques) return false

//   const transformacions = {}
//   for (let i = 0; i < from.length; i++) {
//     const fromLetter = from[i]
//     const toLetter = to[i]
//     const guardaLletra = transformacions[fromLetter]
//     if (guardaLletra && guardaLletra !== toLetter) return false
//     transformacions[fromLetter] = toLetter
//   }

//   return true
// }

describe('canReconfigure', () => {
// test ja no és necessari ja que està implicit en els demés test
//   it('hauria de ser una funcio', () => {
//     expect(canReconfigure).toBeTypeOf('function')
//   })
  it('ha de retornar un error si no troba el priner parèmetre', () => {
    expect(() => canReconfigure()).toThrow()
  })
  it('ha de retornar un error si el primer parèmetre no es un string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })

  it('ha de retornar un error si el segon parèmetre no es un string', () => {
    expect(() => canReconfigure('a')).toThrow()
  })

  it('ha de retornar un valor boleà', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })

  it('ha de retornar fals si la longitud dels paràmetres es diferent', () => {
    expect(canReconfigure('abc', 'de')).toBe(false)
  })

  it('ha de retornar fals si la longitud dels paràmetres es diferent fins i tot amb les mateixes lletres úniques', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })

  it('ha de retornar fals si els strings proveïts tenen un nombre diferent de lletres úniques', () => {
    expect(canReconfigure('abd', 'ccc')).toBe(false)
  })
  it('ha de retornar false si les cadenes tenen un ordre de transformació diferent', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
