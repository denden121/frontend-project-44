export const getRandomInt = (min, max) => {
  const range = max - min + 1
  const array = new Uint32Array(1)
  crypto.getRandomValues(array)
  return min + (array[0] % range)
}
