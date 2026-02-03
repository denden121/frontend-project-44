#!/usr/bin/env node
import { getPlayerName } from '../src/cli.js'
import runEvenGame from '../src/games/even.js'

const name = getPlayerName()
runEvenGame(name)
