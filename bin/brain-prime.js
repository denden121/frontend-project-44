#!/usr/bin/env node
import { getPlayerName } from '../src/cli.js'
import runGame from '../src/index.js'
import primeGame from '../src/games/prime.js'

const name = getPlayerName()
runGame(name, primeGame)
