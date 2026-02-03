import { getRandomInt } from '../utils/random.js'

const OPERATORS = ['+', '-', '*']

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
    const a = getRandomInt(1, 100)
    const b = getRandomInt(1, 100)
    const op = OPERATORS[getRandomInt(0, OPERATORS.length - 1)]
    const question = `${a} ${op} ${b}`
    const correctAnswer = String(applyOp(a, b, op))
    return { question, correctAnswer }
  },
}
