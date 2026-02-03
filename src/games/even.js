import readlineSync from 'readline-sync'

const ROUNDS_COUNT = 3

const isEven = n => n % 2 === 0

export default function runEvenGame(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1
    const correctAnswer = isEven(number) ? 'yes' : 'no'

    console.log(`Question: ${number}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${name}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${name}!`)
}
