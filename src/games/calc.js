import { getRandomInt } from '../utils/random.js'

const MIN_NUMBER = 1
const MAX_NUMBER = 100
const OPERATORS = ['+', '-', '*']
const FIRST_INDEX = 0

const applyOp = (a, b, op) => {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    default:
      return 0
  }
}

export default {
  description: 'What is the result of the expression?',
  getRound() {
    const a = getRandomInt(MIN_NUMBER, MAX_NUMBER)
    const b = getRandomInt(MIN_NUMBER, MAX_NUMBER)
    const op = OPERATORS[getRandomInt(FIRST_INDEX, OPERATORS.length - 1)]
    const question = `${a} ${op} ${b}`
    const correctAnswer = String(applyOp(a, b, op))
    return { question, correctAnswer }
  },
}
