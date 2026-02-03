#!/usr/bin/env node
import { getPlayerName } from '../src/cli.js'
import runGame from '../src/index.js'
import calcGame from '../src/games/calc.js'

const name = getPlayerName()
runGame(name, calcGame)
