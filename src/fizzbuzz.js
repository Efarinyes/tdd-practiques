
export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('Ha petat')
  if (Number.isNaN(number)) throw new Error('Ha petat')
  const multiplies = { 3: 'fizz', 5: 'buzz' }
  let output = ''
  Object
    .entries(multiplies)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })
  return output === '' ? number : output
}
