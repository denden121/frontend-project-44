import { getRandomInt } from '../utils/random.js'

const isEven = n => n % 2 === 0

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound() {
    const number = getRandomInt(1, 100)
    const correctAnswer = isEven(number) ? 'yes' : 'no'
    return { question: String(number), correctAnswer }
  },
}
