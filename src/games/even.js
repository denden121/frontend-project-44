import { getRandomInt } from '../utils/random.js'

const MIN_NUMBER = 1
const MAX_NUMBER = 100

const isEven = n => n % 2 === 0

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound() {
    const number = getRandomInt(MIN_NUMBER, MAX_NUMBER)
    const correctAnswer = isEven(number) ? 'yes' : 'no'
    return { question: String(number), correctAnswer }
  },
}
