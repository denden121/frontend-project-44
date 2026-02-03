#!/usr/bin/env node
import { getPlayerName } from '../src/cli.js'
import runGame from '../src/index.js'
import progressionGame from '../src/games/progression.js'

const name = getPlayerName()
runGame(name, progressionGame)
