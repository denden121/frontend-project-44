import { getRandomInt } from '../utils/random.js'

const MIN_LENGTH = 5
const MAX_LENGTH = 10

const makeProgression = (start, step, length) =>
  Array.from({ length }, (_, i) => start + i * step)

export default {
  description: 'What number is missing in the progression?',
  getRound() {
    const length = getRandomInt(MIN_LENGTH, MAX_LENGTH)
    const start = getRandomInt(1, 50)
    const step = getRandomInt(1, 10)
    const progression = makeProgression(start, step, length)
    const hideIndex = getRandomInt(0, length - 1)
    const display = progression.map((n, i) => (i === hideIndex ? '..' : String(n)))
    const question = display.join(' ')
    const correctAnswer = String(progression[hideIndex])
    return { question, correctAnswer }
  },
}
