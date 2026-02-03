import { getRandomInt } from '../utils/random.js'

const isPrime = (n) => {
  if (n < 2) return false
  if (n === 2) return true
  if (n % 2 === 0) return false
  const limit = Math.sqrt(n)
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false
  }
  return true
}

export default {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getRound() {
    const number = getRandomInt(1, 100)
    const correctAnswer = isPrime(number) ? 'yes' : 'no'
    return { question: String(number), correctAnswer }
  },
}
