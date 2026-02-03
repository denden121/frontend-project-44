const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))

export default {
  description: 'Find the greatest common divisor of given numbers.',
  getRound() {
    const a = Math.floor(Math.random() * 100) + 1
    const b = Math.floor(Math.random() * 100) + 1
    const question = `${a} ${b}`
    const correctAnswer = String(gcd(a, b))
    return { question, correctAnswer }
  },
}
