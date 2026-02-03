import { getRandomInt } from '../utils/random.js'

const MIN_NUMBER = 1
const MAX_NUMBER = 100
const SMALLEST_PRIME = 2
const FIRST_ODD_DIVISOR = 3
const DIVISOR_STEP = 2

const isPrime = (n) => {
  if (n < SMALLEST_PRIME) return false
  if (n === SMALLEST_PRIME) return true
  if (n % SMALLEST_PRIME === 0) return false
  const limit = Math.sqrt(n)
  for (let i = FIRST_ODD_DIVISOR; i <= limit; i += DIVISOR_STEP) {
    if (n % i === 0) return false
  }
  return true
}

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound() {
    const number = getRandomInt(MIN_NUMBER, MAX_NUMBER)
    const correctAnswer = isPrime(number) ? 'yes' : 'no'
    return { question: String(number), correctAnswer }
  },
}
