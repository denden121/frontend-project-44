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
    const a = Math.floor(Math.random() * 100) + 1
    const b = Math.floor(Math.random() * 100) + 1
    const op = OPERATORS[Math.floor(Math.random() * OPERATORS.length)]
    const question = `${a} ${op} ${b}`
    const correctAnswer = String(applyOp(a, b, op))
    return { question, correctAnswer }
  },
}
