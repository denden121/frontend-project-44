import stylistic from '@stylistic/eslint-plugin'

export default [
  {
    ignores: ['node_modules/'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  ...(Array.isArray(stylistic.configs.recommended)
    ? stylistic.configs.recommended
    : [stylistic.configs.recommended]),
]
