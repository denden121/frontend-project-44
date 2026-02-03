const MIN_LENGTH = 5
const MAX_LENGTH = 10

const makeProgression = (start, step, length) =>
  Array.from({ length }, (_, i) => start + i * step)

export default {
  description: 'What number is missing in the progression?',
  getRound() {
    const length = MIN_LENGTH + Math.floor(Math.random() * (MAX_LENGTH - MIN_LENGTH + 1))
    const start = Math.floor(Math.random() * 50) + 1
    const step = Math.floor(Math.random() * 10) + 1
    const progression = makeProgression(start, step, length)
    const hideIndex = Math.floor(Math.random() * length)
    const display = progression.map((n, i) => (i === hideIndex ? '..' : String(n)))
    const question = display.join(' ')
    const correctAnswer = String(progression[hideIndex])
    return { question, correctAnswer }
  },
}
