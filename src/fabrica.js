
export const canReconfigure = (from, to) => {
  // if (from === undefined) throw new Error('parametre requerit') ja no es necessari
  if (typeof from !== 'string') throw new Error('from no es un string')
  if (typeof to !== 'string') throw new Error('to no és un string')

  const mateixaLongitud = from.length === to.length
  if (!mateixaLongitud) return false

  const mateixesLletresUniques = new Set(from).size === new Set(to).size
  if (!mateixesLletresUniques) return false

  const transformacions = {}
  for (let i = 0; i < from.length; i++) {
    const fromLetter = from[i]
    const toLetter = to[i]
    const guardaLletra = transformacions[fromLetter]
    if (guardaLletra && guardaLletra !== toLetter) return false
    transformacions[fromLetter] = toLetter
  }

  return true
}
