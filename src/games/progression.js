import { getRandomInt } from '../utils/random.js'

const MIN_LENGTH = 5
const MAX_LENGTH = 10
const MIN_START = 1
const MAX_START = 50
const MIN_STEP = 1
const MAX_STEP = 10
const FIRST_INDEX = 0

const makeProgression = (start, step, length) =>
  Array.from({ length }, (_, i) => start + i * step)

export default {
  description: 'What number is missing in the progression?',
  getRound() {
    const length = getRandomInt(MIN_LENGTH, MAX_LENGTH)
    const start = getRandomInt(MIN_START, MAX_START)
    const step = getRandomInt(MIN_STEP, MAX_STEP)
    const progression = makeProgression(start, step, length)
    const hideIndex = getRandomInt(FIRST_INDEX, length - 1)
    const display = progression.map((n, i) => (i === hideIndex ? '..' : String(n)))
    const question = display.join(' ')
    const correctAnswer = String(progression[hideIndex])
    return { question, correctAnswer }
  },
}
