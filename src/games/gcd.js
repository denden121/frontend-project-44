import { getRandomInt } from '../utils/random.js'

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

export default {
  description: 'Find the greatest common divisor of given numbers.',
  getRound() {
    const a = getRandomInt(1, 100)
    const b = getRandomInt(1, 100)
    const question = `${a} ${b}`
    const correctAnswer = String(gcd(a, b))
    return { question, correctAnswer }
  },
}
