#!/usr/bin/env node
import { getPlayerName } from '../src/cli.js'
import runGame from '../src/index.js'
import gcdGame from '../src/games/gcd.js'

const name = getPlayerName()
runGame(name, gcdGame)
