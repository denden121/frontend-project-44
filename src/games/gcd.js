import { getRandomInt } from '../utils/random.js'

const MIN_NUMBER = 1
const MAX_NUMBER = 100

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

export default {
  description: 'Find the greatest common divisor of given numbers.',
  getRound() {
    const a = getRandomInt(MIN_NUMBER, MAX_NUMBER)
    const b = getRandomInt(MIN_NUMBER, MAX_NUMBER)
    const question = `${a} ${b}`
    const correctAnswer = String(gcd(a, b))
    return { question, correctAnswer }
  },
}
