const isEven = n => n % 2 === 0

export default {
  description: 'Answer "yes" if the number is even, otherwise answer "no".',
  getRound() {
    const number = Math.floor(Math.random() * 100) + 1
    const correctAnswer = isEven(number) ? 'yes' : 'no'
    return { question: String(number), correctAnswer }
  },
}
